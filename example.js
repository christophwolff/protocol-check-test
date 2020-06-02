$(function () {
  $('button[href]').each(function () {
    window.protocolCheck($(this).attr('href'), function () {
      $(this).css('background-color', 'red')
    }.bind(this))
  })
  $('button[href]').click(function (event) {
    window.protocolCheck($(this).attr('href'), function () {
      alert('protocol not recognized')
    })
    event.preventDefault ? event.preventDefault() : (event.returnValue = false)
  })
})
