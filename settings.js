const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['919847454840'] //ur owner number
global.ownernomer = "917593010976" //ur owner number2
global.ownername = "RΞDHunter ズ" //ur owner name
global.ytname = "YT: " //ur yt chanel name
global.socialm = "GitHub: JOBINSER666" //ur github or insta name
global.location = "India, Kerala, Thiruvnathapuram" //ur location

//new
global.botname = "RΞDHunter ズ"
global.ownernumber = '919847454840'
global.ownername = 'RΞDHunter ズ'
global.ownerNumber = ["916909137213@s.whatsapp.net"]
global.ownerweb = "http://bit.ly/JOBIN-SER-AI-BOT"
global.websitex = "https://cutt.ly/wwaQlSNE"
global.wagc = "https://chat.whatsapp.com/C3V3RDMFLsv3FYYVd0KCKH"
global.themeemoji = '🪀'
global.wm = "Cat Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD6' //script link
global.packname = "RΞDHunter ズ"
global.author = "🦄드림 가이 Cat\n\n"
global.creator = "917593010965@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./ThisPC/Pictures/redhunteranime.jpg") //ur thumb pic
global.thumb = 'https://ibb.co/M8rYKF9' //ur logo pi
global.thumb = 'https://ibb.co/M8rYKF9'
global.thumb = 'https://ibb.co/M8rYKF9' //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
