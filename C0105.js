var sP3a1 = "<font color='red'><b>include </b></font> &nbsp;헤더파일(.h) 내용을 소스코드(.c)에 포함하는 명령문<br><br><font color='red'><b>stdio.h </b></font> &nbsp;standard input output의 줄임말로 printf나 scanf 등 표준입출력 관련 함수 정보를 가지고 있는 헤더파일<br><br><font color='red'><b>main </b></font> &nbsp;프로그램을 시작할 때 운영체제가 호출하는 함수<br><br><font color='red'><b>printf </b></font> &nbsp;print formatted의 줄임말로 전달받은 내용을 형식에 맞게 모니터에 출력하는 함수<br><br><font color='red'><b>\\033 </b></font> &nbsp;출력 설정 이스케이프 문자 <br>printf( \"\\033[31m 빨강색(글자) \\033[0m\n\" ); // 출력결과: <font color='red'>빨강색(글자)</font> <br>printf( \"\\033[33m 노랑색(글자) \\033[0m\n\" ); // 출력결과: <font color='yellow'>노랑색(글자)</font> <br>printf( \"\\033[32m 초록색(글자) \\033[0m\n\" ); // 출력결과: <font color='green'>초록색(글자)</font> <br>printf( \"\\033[34m 파랑색(글자) \\033[0m\n\" ); // 출력결과: <font color='blue'>파랑색(글자)</font> <br>printf( \"\\033[41m 빨강색(바탕) \\033[0m\n\" ); // 출력결과: <span style='background-color:red;'>빨강색(바탕)</span> <br>printf( \"\\033[43m 노랑색(바탕) \\033[0m\n\" ); // 출력결과: <span style='background-color:yellow;'>노랑색(바탕)</span> <br>printf( \"\\033[42m 초록색(바탕) \\033[0m\n\" ); // 출력결과: <span style='background-color:green;'>초록색(바탕)</span> <br>printf( \"\\033[44m 파랑색(바탕) \\033[0m\n\" ); // 출력결과: <span style='background-color:blue;'>파랑색(바탕)</span> <br>printf( \"\\033[01m 글자 굵게    \\033[0m\n\" ); &nbsp; // 출력결과: <span style='font-weight:bold;'> 글자 굵게</span> <br>printf( \"\\033[1;5f모니터 화면의 1번째줄 5번째칸에 출력\" ); &nbsp; // 출력결과: 모니터 화면의 1번째줄 5번째칸에 출력<br>printf( \"\\033[6;3f모니터 화면의 6번째줄 3번째칸에 출력\" ); &nbsp; // 출력결과: 모니터 화면의 6번째줄 3번째칸에 출력<br> ※ \\033[0m는 글자색이나 배경색 초기화<br> ※ \\033[H\\033[J는 모니터 화면을 깨끗이 지우고 초기화<br><br><font color='red'><b>\\n </b></font> &nbsp;줄바꿈(new line) 문자<br><br><font color='red'><b>return </b></font> &nbsp;함수 종료시 실행흐름이 함수를 호출했던 곳으로 되돌아감 <br>예를 들어, main 함수가 끝나면 main 함수를 호출한 운영체제로 제어흐름이 돌아가고 프로그램이 종료<br><br>";
var sP3a2 =[[ "1",	"",	""],["2",	" ■■■■■■■■■■■\n",	""],["3",	" ■        ■            \n",	""],["4",	" ■■■■  ■  ■■■■\n",	""],["5",	" ■        ■        ■\n",	""],["6",	" ■  ■■■■■■■  ■\n",	""],["7",	" ■                  ■\n",	""],["8",	" ■■■■■■■■■■■\n",	""],["9",	"[blank page] ■■■■■■■■■■■\n ■옷      ■        문\n ■■■■  ■  ■■■■\n ■        ■        ■\n ■  ■■■■■■■  ■\n ■                  ■\n ■■■■■■■■■■■\n",	""],["10",	"",	"" ],];
