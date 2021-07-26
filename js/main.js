function notifySuccess(message) {
  try {
    new PNotify({
      title: 'Good',
      text: message,
      type: 'success',
      styling: 'bootstrap3'
    })
  } catch (e) {
    console.log(message)
  }
};

function notifyNews(message) {
  try {
    new PNotify({
      title: 'News',
      text: message,
      type: 'info',
      styling: 'bootstrap3'
    })
  } catch (e) {
    console.log(message)
  }
};

function notifyWarning(message) {
  try {
    new PNotify({
      title: 'Warning',
      text: message,
      styling: 'bootstrap3'
    })
  } catch (e) {
    console.warn(message)
  }
};

function notifyError(message) {
  try {
    new PNotify({
      title: 'Not Recommended',
      text: message,
      type: 'error',
      styling: 'bootstrap3'
    })
  } catch (e) {
    console.error(message)
  }
};

function notifyInfo(message) {
  try {
    new PNotify({
      title: 'Information',
      text: message,
      type: 'info',
      styling: 'bootstrap3',
      addclass: 'dark'
    })
  } catch (e) {
    console.log(message)
  }
};

function load() {
  $( document ).ready(function() {
    var amazonImg = [];
    var amazonText = [];
    amazonImg[0] = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=awspeak-20&marketplace=amazon&amp;region=US&placement=B07SXNKFGS&asins=B07SXNKFGS&linkId=0bfef22939423931a7de270c767f3a37&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=fff"></iframe>';
    amazonText[0] = '<a target="_blank" href="https://www.amazon.com/gp/product/B07SXNKFGS/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07SXNKFGS&linkCode=as2&tag=awspeak-20&linkId=908ea53c375f242d9883ccc0391e6621">Mario &amp; Sonic at the Olympic Games Tokyo 2020 - Nintendo Switch</a>';
    amazonImg[1] = '<iframe style="width:120px;height:240px" marginwidth="0" marginheight="0" scrolling="no" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&amp;OneJS=1&amp;Operation=GetAdHtml&amp;MarketPlace=US&amp;source=ac&amp;ref=tf_til&amp;ad_type=product_link&amp;tracking_id=awspeak-20&amp;marketplace=amazon&amp;region=US&amp;placement=B081JK8XZB&amp;asins=B081JK8XZB&amp;linkId=b3fb85585ea5e5774fa9442f651de924&amp;show_border=false&amp;link_opens_in_new_window=true&amp;price_color=333333&amp;title_color=0066c0&amp;bg_color=ffffff" frameborder="0"></iframe>';
    amazonText[1] = '<a target="_blank" href="https://www.amazon.com/gp/product/B081JK8XZB/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B081JK8XZB&linkCode=as2&tag=awspeak-20&linkId=9a4c785e88db00e1acbe731f3961c34a">MEGACOM Pokemon GO FEST Dual Catchmon Auto Catch Accessory Always On - Wireless Bluetooth for Android Phone &amp; iPhone - Automatic Pokemon Catcher Supports Dual ID Accounts (Black)</a>';
    amazonImg[2] = '<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=awspeak-20&marketplace=amazon&amp;region=US&placement=B07V2XQRMG&asins=B07V2XQRMG&linkId=e9dea49842f2fae2e9189cd6ae348c51&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff"></iframe>';
    amazonText[2] = '<a target="_blank" href="https://www.amazon.com/gp/product/B07V2XQRMG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07V2XQRMG&linkCode=as2&tag=awspeak-20&linkId=52edad5b1533d33430a93ac371d1855a">Favide 24 Pieces Gold Silver Bronze Award Medals-Winner Medals Gold Silver Bronze Prizes for Competitions, Party,Olympic Style, 2 Inches</a>';
    var amazonId = Math.floor(amazonImg.length * Math.random());
    $('#amazon_img').html(amazonImg[amazonId]);
    $('#amazon_text').html(amazonText[amazonId]);

    fetch('./freesms.json')
    .then(response => response.json())
    .then(data => {
      var smsTable = null;

      if (!$.fn.dataTable.isDataTable('#sms_req')) {
        smsTable = $('#sms_req').DataTable({
          data: [],
          columns: [{
              title: 'URL'
            },
            {
              title: 'Number'
            },
            {
              title: 'Availability'
            },
            {
              title: 'Quality'
            },
            {
              title: 'Access'
            }
          ],
          ordering: false,
          searching: true,
          bPaginate: true,
          bLengthChange: true,
          bFilter: true,
          bInfo: true,
          scrollY: '50vh',
          sScrollX: '100%',
          scrollCollapse: true,
          paging: true,
          columnDefs: [{
              width: '20%',
              targets: 0,
              className: 'dt-body-left'
            },
            {
              width: '20%',
              targets: 1,
              className: 'dt-body-center'
            },
            {
              width: '20%',
              targets: 2,
              className: 'dt-body-center'
            },
            {
              width: '20%',
              targets: 3,
              className: 'dt-body-center'
            },
            {
              width: '20%',
              targets: 4,
              className: 'dt-body-center'
            },
            {
              width: '20%',
              targets: [0, 1, 2, 3, 4],
              className: 'dt-head-center'
            }
          ]
        })
      }

      var okMsg = '';
      var errMsg = '';
      var btn = '';

      for (var i in data) {
        var sms = data[i];

        if (sms.review == "Good") {
          okMsg += sms.url + ' Availability: ' + sms.avail + ' Quality: ' + sms.review + '\n\n';
          btn = '<a href="' + sms.url + '" rel="noopener noreferrer nofollow" target="_blank" class="btn btn-primary btn-xs" style="padding:0 5px 0 5px">GO</a>';
        } else {
          errMsg += sms.url + ' Availability: ' + sms.avail + ' Quality: ' + sms.review + '\n\n';
          btn = '<a href="' + sms.url + '" rel="noopener noreferrer nofollow" target="_blank" class="btn btn-warning btn-xs" style="padding:0 5px 0 5px;color:#222">GO</a>';
        }

        $('#sms_req').DataTable().row.add([
          sms.url,
          sms.number,
          sms.avail,
          sms.review,
          btn
        ]).draw(false);
      }

      notifySuccess(okMsg);
      notifyError(errMsg);
    })
  });
}
