function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => { reputation++; };

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

const avrgName = "Fella"
// logs { discordName: "@josh", reputation: 2 }
console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation(),
  avrgName,
});