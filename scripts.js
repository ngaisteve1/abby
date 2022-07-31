$(document).ready(function () {
  $('#tbl').DataTable(
    {
      order: [[0, 'desc']],
      paging: false,
      info: false
    }
  );
debugger
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  $('table a').on("click", function (e) {
    debugger
    if(params.id != 's'){
      debugger
      e.preventDefault();
    }
  });

  const age = dateAgo('2022-04-28');

  document.getElementById("age").innerText = age;
});

function dateAgo(date) {
  var startDate = new Date(date);
  var diffDate = new Date(new Date() - startDate);
  return ((diffDate.toISOString().slice(0, 4) - 1970) + "Y " +
      diffDate.getMonth() + "M " + (diffDate.getDate()-1) + "D");
}