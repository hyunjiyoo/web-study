$.fn.pivot = function (options) {
    // 변수를 선언합니다.
    var $target = $(this);
    var $items = $target.children();
    // wrap() 메서드로 캔버스처럼 전체를 <div></div>로 감싸고 parent() 메서드로 변수에 캔버스를 넣습니다.
    var $container = $target.wrap('<div></div>').parent();
    var option = { width: 500, height: 450 };

    // option은 기본 옵션 객체이고, options는 사용자로부터 입력받는 옵션객체
    // $.extend() 로 옵션객체 합칩니다.
    $.extend(option, options);

    // 스타일을 지정합니다.
    $target.css({
        width: $items.length * option.width,
        height: option.height,
        position: 'absolute'
    });

    $items.css({
        float: 'left',
        width: option.width,
        height: option.height
    });

    $container.css({
        overflow: 'hidden',
        position: 'relative',
        width: option.width,
        height: option.height
    });

    // 이벤트를 연결합니다.
    var originalLeft = 0;
    var oldLeft = 0;
    // 현재 페이지 나타내는 변수 (사용자가 페이지를 오른쪽으로 넘기면 1이 됨)
    var nowPosition = 0;
    // 사용자가 마우스를 누르는지 확인하는 변수
    // mousedown 이벤트 발생 - true, mouseup 이벤트 발생 - false
    var isDown = false;

    $target.on('mousedown', function (event) {
        oldLeft = originalLeft = event.clientX;
        isDown = true;
        event.preventDefault();
    });

    // 움직인 거리 구하고 animate() 메서드로 드래그한 만큼 이동
    $target.on('mousemove', function(event) {
        if(isDown) {
            // 변수 선언
            var distance = oldLeft - event.clientX;
            oldLeft = event.clientX;

            // 움직입니다.
            $target.animate({
                left: '-=' + distance
            }, 0);
            $target.stop(true);
        }
        event.preventDefault();
    });

    $target.on('mouseup', function(event) {
        // 내부 함수 선언
        function movePosition(direction) {
            // 위치 설정합니다.
            var changePosition = nowPosition + direction;
            if(0 <= changePosition && changePosition < $items.length) {
                nowPosition = changePosition;
            }
        }

        // 요소의 1/4이상 드래그했을 경우 피벗합니다. (오른쪽 왼쪽)
        if (originalLeft - event.clientX > option.width / 4) {
            movePosition(+1);
        } else if (originalLeft - event.clientX < -option.width / 4) {
            movePosition(-1);
        }

        // 이동합니다.
        $target.animate({ 'left': -nowPosition * option.width }, 'fast');
        isDown = false;
        event.preventDefault();
    });
};