
const fetch = require("node-fetch")
const queryString = require("query-string")



exports.sourceNodes = ({ actions, createNodeId, createContentDigest }, configOptions) => {
    const { createNode } = actions

    delete configOptions.plugins

    const apiOptions = queryString.stringify(configOptions)
    const apiUrl = `https://www.ramblers.org.uk/api/lbs/walks/?${apiOptions}`

    const processWalk = walk => {
        const nodeId = createNodeId(`RamblersWalk-${walk.id}`)
        const nodeContent = JSON.stringify(walk)
        const nodeData = Object.assign({}, walk, {
          id: nodeId,
          parent: null,
          children: [],
          internal: {
            type: `RamblersWalk`,
            content: nodeContent,
            contentDigest: createContentDigest(walk),
          },
        })
        return nodeData
      }


    return (
        fetch(apiUrl)

        // Parse the response as JSON
        .then(response => response.json())

        // Process the JSON data into a node
        .then(data => {
            data.forEach(walk => {
                const nodeData = processWalk(walk)
                createNode(nodeData);
            })

        })
    )

  }
