const openai = require('../controller/openaiconfig')

const generateMeta = async(title) =>{
    const description = await openai.createChatCompletion({
        model:"gpt-3-5-turbo",
        messages:[
            {
role: 'user',
content:'Come up with a description for your youtube video called ${title}'
            }
        ],
        max_tokens: 100
    })
    console.log(description.data.choices[0].message)
}
module.exports={generateMeta}