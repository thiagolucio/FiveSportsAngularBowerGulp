$(document).ready(function() {
    w3IncludeHTML();
    $('#CarouselYoutube').carousel({
        interval: 5000
    });
    $('#carousel-slide').carousel({
        interval:5000
    });
    //DATEPICKER
    $('#event_date').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR',
        weekStart: 0,
        startDate:'0d',
        todayHighlight: true
    });
    //CIDADES E ESTADOS
    new dgCidadesEstados({
      cidade: document.getElementById('cidade'),
      estado: document.getElementById('estado'),
      change: true
  });
});
