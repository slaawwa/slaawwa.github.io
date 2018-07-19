
let $resBlock = $('#isResultBlock'),
    $step1 = $('.isFirst'),
    $step3 = $('#isStep3Block');

$('.calc__nav .nexts').click(function() {
    let el = $(this)
        .closest('.block-calculator')
        .css('display', 'none');
    if (el.is($step1)) {
        let type = $('[name="work-ter"]:checked', el).val();
        $resBlock.attr('data-step1', type)
    }
    if (el.is($step3)) {
        let type = $('[name="work-ter"]:checked', el).val();
        $resBlock.attr('data-step3', type)
    }
    if (el.is($step1) && !el.find('#myself').prop('checked')) {
        el = el.next();
    }
    el
        .next()
        .css('display', 'block');
});

$('.calc__nav .lasts').click(function() {
    let el = $(this)
        .closest('.block-calculator')
        .css('display', 'none')
        .prev();
  if (el.index() === 1 && !el.find('[name="work-ter"]:checked').length) {
    el = el.prev();
  }
  el
        .css('display', 'block');
});
