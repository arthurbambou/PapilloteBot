const { RichEmbed } = require("discord.js");
const superagent = require("superagent");
exports.run = async (client, message) => {
  const { body } = await superagent
	   .get("http://aws.random.cat/meow");
  const embed = new RichEmbed()
	   .setColor(0x954D23)
	   .setTitle("Meow :cat:")
     .setImage(body.file);
  return message.channel.send(embed);
};
