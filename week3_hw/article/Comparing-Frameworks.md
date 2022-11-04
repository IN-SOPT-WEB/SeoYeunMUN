노션에도 있습니당: https://hypnotic-snipe-3d5.notion.site/b0ce3540ae334b6d8b0cca807b95749c

## 💡 자바스크립트 프레임워크의 공통점

---

바닐라 자바스크립트로 웹 프로그램을 제작하면 다른 페이지로 들어갈 때 순간적으로 화면이 깜박이는 blinking issue를 볼 수가 있다. 이는 바닐라 자바스크립트로 제작된 웹 프로그램이

`SSR(서버 사이드 랜더링)` 방식으로 돌아가기 때문이다.

- SSR이란?
  [https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdGCZHY%2FbtrcOfdcohI%2FDKF2Cr2HHW5X8vNSaexEpK%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdGCZHY%2FbtrcOfdcohI%2FDKF2Cr2HHW5X8vNSaexEpK%2Fimg.png)
    <aside>
    💡 SSR이란, 클라이언트에서 모든 걸 처리하는 게 아니라 서버에서 html 파일을 바로 랜더링 가능한  상태로 만들어주면 서버로부터 `완전하게 만들어진 html파일`을 받아와 페이지 전체를 렌더링 하는 방식을 말한다. 페이지 내에서 상호작용이 생기면(링크를 통해 다른 페이지로 들어가는 등) 서버에서 이 완전한 페이지를 다시 받아와야 하기 때문에 첫 렌더링은 빨라도 이후에 blinking issue가 생긴다.
    
    </aside>

react, vue.js, angular, svelt 와 같은 라이브러리 및 프레임워크들은 `CSR(클라이언트 사이드 랜더링)` 의 랜더링 방식을 지원하고, 컴포넌트 구성으로 SPA를 지원하고 있다.

- CSR과 SPA란?
  [https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbkJ0my%2FbtrcOM9GT1V%2FaKDCRhm77MfHF8ushplGi0%2Fimg.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbkJ0my%2FbtrcOM9GT1V%2FaKDCRhm77MfHF8ushplGi0%2Fimg.png)
    <aside>
    💡 CSR이란, SSR방식과는 달리 클라이언트가 맨 처음 url 요청에 웹 문서가 가지고 있는 모든 정보, 링크페이지까지도 한번에 다 받아와 초기 화면이 느리게 나타날 수 있으나, 이후에 상호작용에서는 더 높은 사용성을 가질 수 있다.
    
    </aside>
    
    <aside>
    💡 SPA(Single Page Application)란,  말 그대로 하나의 페이지로 구성된 웹 어플리케이션으로 첫 랜더링에는 하나의 html 파일만 표시된다. 이후에 새로운 페이지 요청이 있을 때, 페이지 갱신에 필요한 데이터만 전달 받는다.
    
    </aside>

> 같은 **랜더링 방식 및 아키텍쳐를 지원한다면 이들에는 어떤 차이가 있는 걸까?**

## ❓ 프레임워크 간의 차이점

---

<aside>
💡 **React**

- **프레임 워크가 아닌 라이브러리이다.**
  리액트는 라이브러리로, 리액트 자체에서는 빌드나 라우팅 등의 기능을 지원하지 않아 redux와 같은 외부 라이브러리를 import 해와야한다. 그러나 라이브러리이기 때문에 자유도가 높고, 많은 기능이 필요하지 않은 소규모 프로젝트 등에 사용하기 좋다.
- **`Virtual DOM`을 사용한다.**
  virtual DOM을 사용하여 변경사항이 생기면 원래 DOM과 비교하여 연관된 DOM만 바꿔준다.
- **JSX 문법을 사용하여 한 영역에서 DOM도 구현하고 로직도 구현할 수 있다.**
</aside>

<aside>
💡 **Vue.js**

- \***\*`Virtual DOM`을 사용한다.**
  React와 마찬가지로 가상 DOM을 사용.
- **체계화된 Vue** **문법이 존재**
  자유도가 낮고 체계화된 문법이 존재하지만, 그만큼 쉽게 코드를 짤 수 있다.

</aside>

<aside>
💡 **Angular**

- **많은 기능 보유**
  라우팅, 폼 관리, 클라이언트-서버 통신 등 웹 개발에 필요한 라이브러리를 조화롭게 통합한 모음집으로, 무거울 정도로 많은 기능을 보유하고 있다.
- **Typescript를 필수적으로 써야한다.**
  Angular.js의 경우는 자바스크립트 기반이지만, Angular는 Typescript 기반

</aside>

<aside>
💡 **Svelte**

- ************\*\*\*\*************\*\*\*\*************\*\*\*\*************프론트엔드 컴파일러이다.************\*\*\*\*************\*\*\*\*************\*\*\*\*************
  스벨트는 빌드 타임에 한꺼번에 코드를 해석하기도 하고, 또 필요한 작은 양의 코드만 남겨서 로드하여 속도가 빠르다.
- **`Virtual DOM`을 사용하지 않는다.**
  반응형 선언문과 변수를 이용해 로직을 계산하여 연관된 변수등을 한번에 변경해주고,
  업데이트 명령을 받았을 때 DOM을 변경해준다.
- **작은 커뮤니티**
  가장 최근에 출시된 프레임워크로, 상대적으로 아직은 커뮤니티가 작고 정보가 부족하다.

</aside>

- 컴파일러와 인터프리터의 차이가 헷갈린다면!
  ***
  - `컴파일 언어:` 소스 코드 전체를 컴파일 한 후 (기계어로 번역한 후) 기계어를 CPU/메모리를 통해 읽어 실행하는 방식으로 동작하는 언어
  - `인터프리터 언어:` 소스 코드를 한 줄씩 번역하면서 실행하는 방식으로 동작하는 언어
    | | 장점 | 단점 |
    | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
    | 인터프리터 언어 | - 빌드 과정 없이 실행 가능: 별도의 실행 파일이 없다. |
    | - 지원하는 인터프리터만 있다면 실행 가능하기 때문에 플랫폼에 독립적이다. | - 상대적으로 느린 속도: 컴파일을 하지 않고 인터프리터가 직접 한 줄씩 읽어서 실시간으로 실행 |
    | 컴파일 언어 | - 빠른 속도: 이미 컴파일된 파일은 컴퓨터가 별다른 작업 없이 해당 프로그램 이해 가능. | - 플랫폼 의존성: 실행 기계가 달라지면 새로 컴파일 해야함. |

## ❓ 스타트업 창업 시 무슨 프레임워크가 좋을까?

---

![https://cdn.accelebrate.com/images/blog/react-angular-vue-svelte-comparison/venn.jpg](https://cdn.accelebrate.com/images/blog/react-angular-vue-svelte-comparison/venn.jpg)

창업 시 중요한 것은 협업 체계를 잘 잡아가는 것이라고 생각한다.

따라서 우선은 커뮤니티가 방대하고 가장 사용량이 많은 **React**와, 상대적으로 쉽게 코드를 짤 수 있는 **Vue.js** 가 나을 것이다. 점점 스타트업의 크기가 커지거나 더 많은 기능을 요구할 때는 **Angular**나 \***\*Svelte\*\***의 도입을 고민해 보는 것도 나쁘지 않을 것 같다.

## ‼️ 리액트를 학습하는 이유

---

리액트를 학습하는 이유 중 제일 큰 것은 `방대한 커뮤니티`와 `높은 사용량`이다.

![https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/Most-popular-technologies.png.webp](https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/08/Most-popular-technologies.png.webp)

> “_React has the largest community support and the largest library selection of them all. It has the best balance of being learnable while also being super popular.”_

- 리액트는 많은 라이브러리 기능을 지원하고 있기에, 선택적으로 기능을 점점 늘려가면서 배우기 좋은 라이브러리라고 생각한다.

- 공식 문서와 커뮤니티는 배움의 속도를 다른 프레임워크보다 쉽게 높여준다.

- 사용량이 높아 취업 시장에서도 유리하다.

### 출처

> [****Svelte vs Vue: Top Front-End Frameworks Comparison****]
>
> [https://procoders.tech/blog/svelte-vs-vue-frameworks-comparison/](https://procoders.tech/blog/svelte-vs-vue-frameworks-comparison/)
>
> [****React, Angular, Vue, and Svelte: A Comparison****]
>
> [https://www.accelebrate.com/blog/react-angular-vue-svelte-comparison](https://www.accelebrate.com/blog/react-angular-vue-svelte-comparison)
>
> [[**********React] 서버 사이드 렌더링(SSR)/클라이언트 사이드 렌더링(CSR)이란?\***\*\*\*\*\***]
>
> [https://ctdlog.tistory.com/46](https://ctdlog.tistory.com/46)
>
> [****스벨트 vs 리액트, 누가 더 뛰어날까?****]
>
> [https://yozm.wishket.com/magazine/detail/1176/](https://yozm.wishket.com/magazine/detail/1176/)
>
> [************************************************************리액트를 사용하는 이유(SPA,CSR,SSR)************************************************************]
>
> [https://babycoder05.tistory.com/entry/리액트를-사용하는-이유-SPA-CSR-SSR](https://babycoder05.tistory.com/entry/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-SPA-CSR-SSR)
>
> [**리액트(React.js) vs 뷰(Vue.js)]\*\*
>
> [https://nyol.tistory.com/148](https://nyol.tistory.com/148)
