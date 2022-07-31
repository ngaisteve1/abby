$(document).ready(function () {
  $('#tbl').DataTable(
    {
      order: [[0, 'desc']],
      paging: false,
      info: false
    }
  );

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  $('a').on("click", function (e) {
    if(params.id != 's'){
      e.preventDefault();
    }
  });

});