// Add a citation 
const addcitation = (db, message) => {
  const value = message.content.substr(10);
  const contributor = message.author.toString();

  console.log(value);
  message.reply("Ajout de la citation à la base de données")

  db.addCitation({
    citation_value: value,
    citation_contributor: contributor
  });
};

module.exports = addcitation;