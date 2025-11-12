function openTab(event, tabId) {
  // Get tab active remove it
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.classList.remove('active')
    tab.id
  });
  // Add active to click tab
  event.currentTarget.classList.add('active');

  // get content tab active remove active
  const contentTabs = document.querySelectorAll('.tab-content');
  contentTabs.forEach(contentTab => {
    contentTab.classList.remove('active')
    contentTab.id
  });
  document.getElementById(tabId).classList.add('active')
}
