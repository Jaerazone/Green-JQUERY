$(function(){

	// 슬릭 추가 및 속성 변경
	/* 직접 작성할 공간 */
	$(".main_visual_slide").slick({
		autoplay:true,
		autoplaySpeed :2000,
		dots : true
	});



	// 탭 메뉴 숨기기 및 활성화
	$("#notice_tab_wrap h4 a").on("click", tabmenu);
	function tabmenu(e) {
		/* 직접 작성할 공간 */
		e.preventDefault();
		const $ts = $(this); // a버튼, 자기자신을 저장 : <a href="#" class="on">공지사항</a>, <a href="#">새소식</a>
		const $next = $ts.parent().next(); // a버튼 자신의 부모h4의 형제div를 들고옴
		
		//현재 탭 컨테이너가 display가 none 이면 실행
		if($next.is(":hidden")) { // is(":hidden") : display가 none인지 확인가능
			$("#notice_tab_wrap h4 a").removeClass("on"); //a의 on클래스를 제거함 -> on의 css를 보면 : 모든 버튼의 색을 회색으로 변경
			$ts.addClass("on"); //자신의 버튼을 활성화
			
			//모든 div 내용을 숨김다음
			$("#notice_tab_wrap > div:visible").hide();

			//자신의 div 내용을 보일수 있게한다
			$next.show();
		}
	}

});
