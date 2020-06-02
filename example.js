$(function () {
  $('button[href]').each(function () {
    setTimeout(() => {
      window.protocolCheck($(this).attr('href'), function () {
        $(this).css('background-color', 'red')
      }.bind(this), function () {
        $(this).css('background-color', 'red')
      }.bind(this))
    }, 400);
  })
  $('button[href]').click(function (event) {
    window.protocolCheck($(this).attr('href'), function () {
      alert('protocol not recognized')
    }, function () {
      alert('protocol recognized')
    }.bind(this))
    event.preventDefault ? event.preventDefault() : (event.returnValue = false)
  })
})
