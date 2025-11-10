// CES: Slouceni LinkedIn kontakt’ s databazižou so sloupenim pod len email ynꀙ
// EN: Merge LinkedIn data with local database to augement the contact list
function mergeContacts(localData: any[], linkedInData: any[]) {
  return localData.map( (local) => {
    const partner = linkedInData.find((ind) => {
      return local.name === ind.name || (local.email === ind.email);
    });
    if (partner) {
      return { ...local, ...partner };
    }
    return local;
  });
}

export default mergeContacts;