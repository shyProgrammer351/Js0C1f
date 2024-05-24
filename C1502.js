var sP3a1 = "<font color='red'><b>define </b></font> &nbsp;컴파일 전에 미리 소스코드에서 매크로 이름을 대체 문자열로 치환하는 전처리를 수행 <pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>#define 매크로이름 대체문자열 <br>#define PI 3.14 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // 매크로 상수 <br>#define SQUARE(X) ((X)*(X)) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // 매크로 함수 <br>...<br>double circularArea = PI * SQUARE( 3 ); // 3.14 * ((3)*(3))로 치환 </pre><br><font color='red'><b>DoesPlayerAWin </b></font> &nbsp;A양이 이긴 경우 1을 반환하는 매크로 함수<br><br><font color='red'><b>? </b></font> &nbsp;삼항연산자에서 조건식이 참인지 거짓인지 확인하는 기호 <pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>( 조건식 ) ? 조건식이 참일 때 값 : 조건식이 거짓일 때 값</pre><br><font color='red'><b>switch </b></font> &nbsp;정수형 변수가 특정 정수값이면 해당 명령문을 실행하는 선택문<pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>switch( 정수형 변수 ) <br>{ <br>case 첫번째 정수값:<br> &nbsp; 변수가 첫번째 정수값이면 실행하는 명령문<br>case 두번째 정수값:<br> &nbsp; 변수가 두번째 정수값이면 실행하는 명령문<br>...<br>default:<br> &nbsp; 변수가 앞에서 제시된 정수값이 아니면 실행하는 명령문<br>}</pre><br><font color='red'><b>case </b></font> &nbsp;switch 문에서 정수형 변수를 특정 정수값과 비교하는 명령문<br><br><font color='red'><b>break </b></font> &nbsp;실행흐름을 중단하고 해당 영역을 빠져나오는 명령문으로, switch 문에서 break를 실행하면 이후 명령문은 건너띄고 switch 문을 빠져나옴 <pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>switch( 정수형 변수 ) <br>{ <br>case 첫번째 정수값:<br> &nbsp; 변수가 첫번째 정수값이면 실행하는 명령문<br> &nbsp; break;<br>case 두번째 정수값:<br> &nbsp; 변수가 두번째 정수값이면 실행하는 명령문<br> &nbsp; break;<br>...<br>default:<br> &nbsp; 변수가 앞에서 제시된 정수값이 아니면 실행하는 명령문<br>}</pre><br><font color='red'><b>return </b></font> &nbsp;함수 종료시 실행흐름이 함수를 호출했던 곳으로 되돌아가는 명령문 <br>f( x ); → f( x ) { → ... → return y2; } → y1 = 의 순서대로 실행<pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>y1 = f( x );<br>...<br>int f( x )<br>{ <br> &nbsp; ...<br> &nbsp; return y2; <br>}</pre><br><font color='red'><b>if </b></font> &nbsp;조건식이 참이면 해당 명령문을 실행하는 선택문<pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>if ( 조건식 ) <br>{ <br> &nbsp; 조건식이 참이면 실행하는 명령문 <br>} </pre><br><font color='red'><b>else </b></font> &nbsp;앞에 제시된 조건식이 거짓이면 해당 명령문을 실행하는 선택문 <pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>if ( 조건식 ) <br>{ <br> &nbsp; 조건식이 참이면 실행하는 명령문 <br>} <br>else <br>{ <br> &nbsp; 앞에 제시된 조건식이 거짓이면 실행하는 명령문 <br>}</pre><br><font color='red'><b>else if </b></font> &nbsp;첫번째 조건식이 거짓이고 이후 조건식이 참이면 해당 명령문을 실행하는 선택문<pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>if ( 첫번째 조건식 ) <br>{ <br> &nbsp; 첫번째 조건식이 참이면 실행하는 명령문 <br>} <br>else if ( 두번째 조건식 ) <br>{ <br> &nbsp; 두번째 조건식이 참이면 실행하는 명령문 <br>}<br>else if ( 세번째 조건식 ) <br>{ <br> &nbsp; 세번째 조건식이 참이면 실행하는 명령문 <br>} <br>... <br>else <br>{ <br> &nbsp; 앞에 제시된 모든 조건식이 거짓이면 실행하는 명령문 <br>}</pre><br>";
var sP3a2 =[[ "1",	"",	"table	main함수                  :ww	 :cbw$playerA  :lb	 :cbw$playerB  :lb	"],["2",	"",	"table	main함수                  :ww	 <b>SCISSOR</b> :cbw$playerA  :lb	 <b>SCISSOR</b> :cbw$playerB  :lb	"],["4",	"\nA양, ",	""],["F2b",	"",	"table	main함수                  :ww	 SCISSOR :cbw$playerA  :lb	 SCISSOR :cbw$playerB  :lb	getRockPaperScissors 함수:ww	 :cbw$player  :lb	"],["F21",	"가위(1), 바위(2), 보(3) 중 하나를 숫자로 입력하세요: 2\n",	"table	main함수                  :ww	 SCISSOR :cbw$playerA  :lb	 SCISSOR :cbw$playerB  :lb	getRockPaperScissors 함수:ww	 <b>ROCK</b> :cbw$player  :lb	"],["F22",	"",	"table	main함수                  :ww	 SCISSOR :cbw$playerA  :lb	 SCISSOR :cbw$playerB  :lb	getRockPaperScissors 함수:ww	  ROCK  :cbw$player  :lb	"],["F23",	"",	""],["F25",	"",	""],["F26",	"바위를 냈습니다.\n",	""],["F28",	"",	""],["F2e",	"",	""],["3",	"",	"table	main함수                  :ww	 <b>ROCK</b> :cbw$playerA  :lb	 SCISSOR :cbw$playerB  :lb	"],["6",	"\nB군, ",	"table	main함수                  :ww	  ROCK  :cbw$playerA  :lb	 SCISSOR :cbw$playerB  :lb	"],["F2b",	"",	"table	main함수                  :ww	  ROCK  :cbw$playerA  :lb	 SCISSOR :cbw$playerB  :lb	getRockPaperScissors 함수:ww	 :cbw$player  :lb	"],["F21",	"가위(1), 바위(2), 보(3) 중 하나를 숫자로 입력하세요: 1\n",	"table	main함수                  :ww	  ROCK  :cbw$playerA  :lb	 SCISSOR :cbw$playerB  :lb	getRockPaperScissors 함수:ww	 <b>SCISSOR</b> :cbw$player  :lb	"],["F22",	"",	"table	main함수                  :ww	  ROCK  :cbw$playerA  :lb	 SCISSOR :cbw$playerB  :lb	getRockPaperScissors 함수:ww	 SCISSOR :cbw$player  :lb	"],["F23",	"",	""],["F24",	"가위를 냈습니다.\n",	""],["F28",	"",	""],["F2e",	"",	""],["5",	"",	"table	main함수                  :ww	 ROCK :cbw$playerA  :lb	 <b>SCISSOR</b> :cbw$playerB  :lb	"],["7",	"",	"table	main함수                  :ww	  ROCK  :cbw$playerA  :lb	 SCISSOR :cbw$playerB  :lb	"],["9",	"",	""],["F1",	"",	""],["10",	"",	""],["11",	"\nA양이 이겼습니다.\n",	""],["14",	"",	"" ],];
