var sP3a1 = "<font color='red'><b>int </b></font> &nbsp;-2, -1, 0, 1, 2 등의 정수 자료형<br><br><font color='red'><b>switch </b></font> &nbsp;정수형 변수가 특정 정수값이면 해당 명령문을 실행하는 선택문<pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>switch( 정수형 변수 ) <br>{ <br>case 첫번째 정수값:<br> &nbsp; 변수가 첫번째 정수값이면 실행하는 명령문<br>case 두번째 정수값:<br> &nbsp; 변수가 두번째 정수값이면 실행하는 명령문<br>...<br>default:<br> &nbsp; 변수가 앞에서 제시된 정수값이 아니면 실행하는 명령문<br>}</pre><br><font color='red'><b>case </b></font> &nbsp;switch 문에서 정수형 변수를 특정 정수값과 비교하는 명령문<br><br><font color='red'><b>break </b></font> &nbsp;실행흐름을 중단하고 해당 영역을 빠져나오는 명령문으로, switch 문에서 break를 실행하면 이후 명령문은 건너띄고 switch 문을 빠져나옴 <pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>switch( 정수형 변수 ) <br>{ <br>case 첫번째 정수값:<br> &nbsp; 변수가 첫번째 정수값이면 실행하는 명령문<br> &nbsp; break;<br>case 두번째 정수값:<br> &nbsp; 변수가 두번째 정수값이면 실행하는 명령문<br> &nbsp; break;<br>...<br>default:<br> &nbsp; 변수가 앞에서 제시된 정수값이 아니면 실행하는 명령문<br>}</pre><br><font color='red'><b>if </b></font> &nbsp;조건식이 참이면 해당 명령문을 실행하는 선택문<pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>if ( 조건식 ) <br>{ <br> &nbsp; 조건식이 참이면 실행하는 명령문 <br>} </pre><br><font color='red'><b>== </b></font> &nbsp;등가연산자로 ( 왼쪽값 == 오른쪽값 )은 두 값이 같으면 참(1)을 반환하고 다르면 거짓(0)을 반환하며, 대입연산자 =와 비교하여 주의<br><br><font color='red'><b>else if </b></font> &nbsp;첫번째 조건식이 거짓이고 이후 조건식이 참이면 해당 명령문을 실행하는 선택문<pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>if ( 첫번째 조건식 ) <br>{ <br> &nbsp; 첫번째 조건식이 참이면 실행하는 명령문 <br>} <br>else if ( 두번째 조건식 ) <br>{ <br> &nbsp; 두번째 조건식이 참이면 실행하는 명령문 <br>}<br>else if ( 세번째 조건식 ) <br>{ <br> &nbsp; 세번째 조건식이 참이면 실행하는 명령문 <br>} <br>... <br>else <br>{ <br> &nbsp; 앞에 제시된 모든 조건식이 거짓이면 실행하는 명령문 <br>}</pre><br><font color='red'><b>&& </b></font> &nbsp;논리연산자 AND로 ( 왼쪽조건식 && 오른쪽조건식 )은 두 조건식 모두 참이면 참(1)을 반환하고, 하나라도 거짓이면 거짓(0)을 반환<br><br><font color='red'><b>else </b></font> &nbsp;앞에 제시된 조건식이 거짓이면 해당 명령문을 실행하는 선택문 <pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>if ( 조건식 ) <br>{ <br> &nbsp; 조건식이 참이면 실행하는 명령문 <br>} <br>else <br>{ <br> &nbsp; 앞에 제시된 조건식이 거짓이면 실행하는 명령문 <br>}</pre><br>";
var sP3a2 =[[ "1",	"",	"table	main함수:ww	            0               :lbw$playerA  :lb	            0:lbw$playerB  :lb	"],["2",	"",	""],["3",	"A양, 가위(1), 바위(2), 보(3) 중 하나를 숫자로 입력하세요: ",	""],["4",	"2\n",	"table	main함수:ww	            <b>2</b> <del>0</del>             :lbw$playerA  :lb	            0:lbw$playerB  :lb	"],["5",	"",	"table	main함수:ww	            2               :lbw$playerA  :lb	            0:lbw$playerB  :lb	"],["6",	"",	""],["9",	"",	""],["10",	"바위를 냈습니다.\n",	""],["11",	"",	""],["14",	"B군, 가위(1), 바위(2), 보(3) 중 하나를 숫자로 입력하세요: ",	""],["15",	"1\n",	"table	main함수:ww	            2               :lbw$playerA  :lb	            <b>1</b> <del>0</del>:lbw$playerB  :lb	"],["16",	"",	"table	main함수:ww	            2               :lbw$playerA  :lb	            1:lbw$playerB  :lb	"],["17",	"",	""],["18",	"가위를 냈습니다.\n",	""],["19",	"",	""],["25",	"",	""],["27",	"",	""],["29",	"",	""],["30",	"\nA양이 이겼습니다.\n",	""],["35",	"",	"" ],];
