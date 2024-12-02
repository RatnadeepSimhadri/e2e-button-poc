const express = require('express');
const path = require('path');
const app = express();
const crypto = require('crypto');
const port = 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

/**
 * In Memory MessageStore
 * @type {Map<any, any>}
 */
const messageStore = new Map();

/**
 * Helper function to generate a unique key
 * @returns {string}
 */
function generateUniqueKey() {
    return crypto.randomBytes(16).toString('hex');
}

/**
 * Helper function to clear in memory Cache
 */
function cleanupOldMessages() {
    const ONE_HOUR = 60 * 60 * 1000;
    for (const [key, data] of messageStore) {
        if (Date.now() - data.timestamp > ONE_HOUR) {
            messageStore.delete(key);
        }
    }
}

/**
 * Simple content generation utility
 * @returns {string}
 */
const getContent = () => {
    return `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
      non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.
  `
}

app.get('/', (req, res) => {
    res.render('index', { title: 'Zoid Demo' });
});

app.get('/button', (req, res) => {
    res.render('button', { buttonText: 'Open Modal' });
});

app.get('/popup', (req, res) => {
    res.render('popup', {
        title: req.query.title || 'Default Modal Title',
        content: req.query.content || 'Default Modal Content'
    });
});

app.get('/redirect/:orderID', (req, res) => {
    const { orderID } = req.params;

    const messageData = messageStore.get(orderID);

    if (!messageData) {
        return res.redirect('/error?message=Message not found or expired');
    }

    res.render('redirect', {
        message: messageData.message,
        timestamp: messageData.created
    });

    // Optionally, clean up the message after displaying
    messageStore.delete(orderID);
});

app.get('/api/order', (req, res) => {
    // Clean up old messages periodically
    cleanupOldMessages();

    setTimeout(() => {
        // Generate unique key for this message
        const orderID = generateUniqueKey();

        console.log("Creating an Order",{orderID},"and storing the corresponding mandate Information");

        messageStore.set(orderID, {
            message: getContent(),
            timestamp: Date.now(),
            created: new Date().toISOString()
        });

        res.json({ orderID });
    }, 1000);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

