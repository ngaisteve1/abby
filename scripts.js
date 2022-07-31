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

});