var sP3a1 = "<font color='red'><b>int </b></font> &nbsp;함수 종료시 y1 = f( x )의 y1에 전달하는 반환값 y2의 자료형이 int이면 함수의 자료형을 int로 선언<pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>y1 = f( x );<br>...<br>int f( x )<br>{ <br> &nbsp; ...<br> &nbsp; return y2; <br>}</pre><br><font color='red'><b>return </b></font> &nbsp;함수 종료시 실행흐름이 함수를 호출했던 곳으로 되돌아가는 명령문 <br>f( x ); → f( x ) { → ... → return y2; } → y1 = 의 순서대로 실행<pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>y1 = f( x );<br>...<br>int f( x )<br>{ <br> &nbsp; ...<br> &nbsp; return y2; <br>}</pre><br><font color='red'><b>= </b></font> &nbsp;대입연산자는 y1 = f( x )는 변수공간 y1 <span style ='border:1px solid #000000; padding:3px;'>&nbsp;y1값 </span>을 변수공간 y1 <span style ='border:1px solid #000000; padding:3px;'>&nbsp;y2값 </span>으로 변경 <pre style='width:790px; margin:0; padding:10px; border:1px solid #bcbcbc'>y1 = f( x );<br>...<br>int f( x )<br>{ <br> &nbsp; ...<br> &nbsp; return y2; <br>}</pre><br>";
var sP3a2 =[[ "1",	"",	"table	main 함수:ww	            0               :lbw$distance  :lb	            0:lbw$taxiFare  :lb	"],["2",	"택시의 이동거리(m)를 입력하세요: 1600\n",	"table	main 함수:ww	           <b>1600</b>             :lbw$distance  :lb	            0:lbw$taxiFare  :lb	"],["4",	"",	""],["Fb",	"",	"table	main 함수:ww	           1600             :lbw$distance  :lb	            0:lbw$taxiFare  :lb	calculateTaxiFare 함수:ww	           <b>1600</b>:lbw$distance  :lb	            0:lbw$taxiFare  :lb	"],["Fe",	"",	"table	main 함수:ww	           1600             :lbw$distance  :lb	            0:lbw$taxiFare  :lb	calculateTaxiFare 함수:ww	           1600:lbw$distance  :lb	           <b>4800</b> :lbw$taxiFare  :lb	"],["3",	"",	"table	main 함수:ww	           1600             :lbw$distance  :lb	           <b>4800</b>:lbw$taxiFare  :lb	"],["5",	"1600m 이동시 택시요금은 4800원입니다 ",	"table	main 함수:ww	           1600             :lbw$distance  :lb	           4800:lbw$taxiFare  :lb	"],["6",	"",	"" ],];
