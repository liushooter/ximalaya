$(document).ready(function(){
  $("#articles").html(chrome.extension.getBackgroundPage().link_data);

  // $("#zqw").click(function(){
  //   var filename = $(this).attr('download');
  //   document.execCommand('SaveAs',null, filename)
  // });

// $("#articles").on('click', function(){
//   var filename = $(this).attr('download');
//   console.log(filename);
//   document.execCommand('SaveAs',null, filename)
// });

});
