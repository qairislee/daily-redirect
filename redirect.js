(function () {
  const parentPageId = '609911659';  // Daily Standup 主頁的 pageId

  const now = new Date();
  const todayStr = `${now.getMonth() + 1}/${now.getDate()}`; // 例：4/10

  fetch(`/wiki/rest/api/content/${parentPageId}/child/page?limit=100`, {
    headers: {
      'Accept': 'application/json'
    },
    credentials: 'include' // 重要：讓 Confluence 帶上 cookie
  })
    .then(response => response.json())
    .then(data => {
      const pages = data.results;
      const todayPage = pages.find(p => p.title.includes(todayStr));

      if (todayPage) {
        const redirectUrl = `/wiki${todayPage._links.webui}`;
        window.location.href = redirectUrl;
      } else {
        document.body.innerHTML = `<h2>❌ 沒有找到今天 (${todayStr}) 的 Daily Standup 頁面</h2>`;
      }
    })
    .catch(err => {
      console.error("錯誤：", err);
      document.body.innerHTML = `<h2>⚠️ 發生錯誤，請確認是否已登入 Confluence</h2>`;
    });
})();
