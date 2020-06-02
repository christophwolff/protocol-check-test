$(function () {
  $('button[href]').each(function () {
    window.protocolCheck($(this).attr('href'), function () {
      $(this).css('background-color', 'red')
    }.bind(this))
  })
})
