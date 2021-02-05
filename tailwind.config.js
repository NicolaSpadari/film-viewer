module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            "./*.vue",
            "./src/views/*.vue",
            "./src/wrappers/*.vue",
            "./src/components/*.vue"
        ]
    }
};
