var sP3a1 = "<font color='red'><b>define </b></font> &nbsp;컴파일 전에 미리 소스코드에서 매크로 이름을 대체 문자열로 치환하는 전처리를 수행 <pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>#define 매크로이름 대체문자열 <br>#define PI 3.14 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // 매크로 상수 <br>#define SQUARE(X) ((X)*(X)) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // 매크로 함수 <br>...<br>double circularArea = PI * SQUARE( 3 ); // 3.14 * ((3)*(3))로 치환 </pre><br><font color='red'><b>( </b></font> &nbsp;여는 둥근괄호로 매크로 함수는 꼼꼼하게 ()해야 올바르게 연산 가능 <br><br>예를 들어 CIRCULARAREA(r) PI*r*r로 정의하면 CIRCULARAREA(1+2)는 PI*1+2*1+2로 잘못 계산되지만, <br>CIRCULARAREA(r) (PI*(r)*(r))로 정의하면 (PI*(1+2)*(1+2))로 올바르게 연산<br><br><br><font color='red'><b>) </b></font> &nbsp;닫는 둥근 괄호<br><br>";
var sP3a2 =[[ "3",	"",	"table	main함수:ww	          0.0          :lbw$radius  :lb	          0.0   :lbw$circumference  :lb		          0.0   :lbw$circularArea  :lb	"],["4",	"",	""],["5",	"반지름을 입력하세요 : 3\n",	"table	main함수:ww	        <b>3.000000</b>       :lbw$radius  :lb	          0.0   :lbw$circumference  :lb		          0.0   :lbw$circularArea  :lb	"],["7",	"",	"table	main함수:ww	        3.000000       :lbw$radius  :lb	          0.0   :lbw$circumference  :lb		          0.0   :lbw$circularArea  :lb	"],["1",	"",	""],["6",	"",	"table	main함수:ww	        3.000000       :lbw$radius  :lb	       <b>18.849552</b>:lbw$circumference  :lb		          0.0   :lbw$circularArea  :lb	"],["9",	"",	"table	main함수:ww	        3.000000       :lbw$radius  :lb	       18.849552:lbw$circumference  :lb		          0.0   :lbw$circularArea  :lb	"],["2",	"",	""],["8",	"",	"table	main함수:ww	        3.000000       :lbw$radius  :lb	       18.849552:lbw$circumference  :lb		       <b>28.274328</b>:lbw$circularArea  :lb	"],["10",	"반지름 3.00인 원둘레는 18.85이고 원면적은 28.27입니다.\n",	"table	main함수:ww	        3.000000       :lbw$radius  :lb	       18.849552:lbw$circumference  :lb		       28.274328:lbw$circularArea  :lb	"],["12",	"",	""],["1",	"",	""],["11",	"",	"table	main함수:ww	        3.000000       :lbw$radius  :lb	       <b>25.132736</b>:lbw$circumference  :lb		       28.274328:lbw$circularArea  :lb	"],["14",	"",	"table	main함수:ww	          3.0          :lbw$radius  :lb	       25.132736:lbw$circumference  :lb		       28.274328:lbw$circularArea  :lb	"],["2",	"",	""],["13",	"",	"table	main함수:ww	          3.0          :lbw$radius  :lb	       25.132736:lbw$circumference  :lb		       <b>50.265472</b>:lbw$circularArea  :lb	"],["15",	"반지름 ( 3.00 + 1.00 )인 원둘레는 25.13이고 원면적은 50.27입니다.\n",	"table	main함수:ww	          3.0          :lbw$radius  :lb	       25.132736:lbw$circumference  :lb		       50.265472:lbw$circularArea  :lb	"],["16",	"",	"" ],];
