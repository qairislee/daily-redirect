(function(){
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const year = now.getFullYear() % 100;
  const url = `https://kkday.atlassian.net/wiki/spaces/OT/pages/609911659/${month}+${day}+${year}`;
  window.location.href = url;
})();
