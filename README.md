# Installation


Install the plugin into your Gatsby site folder.

```
    npm install gatsby-source-ramblers --save
```


Then add the following configuration to your gatsby-config.js

```javascript
    module.exports = {

        ...

        plugins: [
            {
                resolve: `gatsby-source-ramblers`,
                options: {
                    groups: `XXXX`
                }
            },

            ...
        ]
    }
```

Where XXXX is the Ramblers group id for the group's walks you would like to see.
