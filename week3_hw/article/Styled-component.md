노션에도 있습니당 : https://hypnotic-snipe-3d5.notion.site/Styled-component-7a215206287b406393a7c7c4b9a10dd3

## ❓ Styled- Component의 장/단점?


### 장점

- `props`를 사용한 다이나믹한 스타일링
- Unique한 **Class name** 을 작성할 수 있어, 번들로 합쳐졌을 때도 버그가 생길일이 없다.
- 한 페이지 내에서 css 작성 가능
- component 기준으로 적용돼, 협업 시 빠른 이해를 돕는다.
  즉, 해당 코드가 어떤 컴포넌트에 영향을 주는 지 구성을 쉽게 파악할 수 있고, 기존의 코드를 이해하는 시간이 적게 걸린다.

### 단점

- 현재 로딩하는 파일의 사이즈가 더 커진다
- `프레임워크에 의존적`이기 때문에, 프레임워크를 바꿀 시, 코드를 바꿔야한다.

## ❓ Styled- Component 대체 라이브러리


<aside>
  
### **Emotion 👩‍🎤**

React에서만 사용되는 것이 아니라 프레임워크를 사용하지 않을 때도 사용가능한 **CSS-in-JS 라이브러리.** styled- component와 비슷하나,원래 태그를 살리는 게 특징이고`Nested`와 같은 scss 문법도 사용할 수 있게 해준다. @emotion/styled 를 설치하면 styled- component처럼 사용 가능.

</aside>

```jsx
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

const divStyle = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`export default function App() {
  return <div css={divStyle}>Hover to change color.</div>}
```
<br>

## ‼️ 내가 가장 맘에 드는 스타일링 라이브러리


사실 이전에는 `styled-component`를 사용할 때 css만큼 익숙하지 않았기에,

`styled-component` 를 사용하면 페이지가 복잡해지고 정의된 스타일 명을 따라 올라가는 것은 css파일로 옮겨가는 것과 별 차이가 없다고 생각해 장점을 잘 이해하지 못했었다.

그러나 많이 사용해보면서, `styled-component` 가 컴포넌트 구조로 되어있어 전체 리액트의 구조를 파악하는 데 더 유리하다는 생각을 하게 되었고, 현재 가장 마음에 드는 스타일링 라이브러리는 `styled-component` 가 되었다.

이번 아티클을 작성하면서 emotion을 처음 접해봤다. styled-component를 사용하면 바로 태그명을 볼 수가 없어서 랜더링이 되고 나서 개발자 도구에서 element 구조를 한 눈에 확인해야했다.

그러나 emotion은 태그명을 그대로 살려주기 때문에 이러한 부분에서는 emotion에 도전해보고 싶다.

### 출처

> [**Styled components – Pros and Cons**]
>
> [https://devrecipes.net/styled-components-pros-and-cons/](https://devrecipes.net/styled-components-pros-and-cons/)
>
> [****Styled Components — How to Use, When to Use, What Are The Pros and Cons****]
>
> [https://medium.com/@lior_amsalem/styled-components-how-to-use-when-to-use-what-are-the-pros-and-cons-68a58f12265f](https://medium.com/@lior_amsalem/styled-components-how-to-use-when-to-use-what-are-the-pros-and-cons-68a58f12265f)
>
> [****The Pros and Cons of Using Styled Components in React****]
>
> [https://www.makeuseof.com/styled-components-react-pros-cons/](https://www.makeuseof.com/styled-components-react-pros-cons/)
>
> [******Emotion******]
>
> [https://emotion.sh/docs/introduction](https://emotion.sh/docs/introduction)
>
> [**emotion.js 소개 및 사용법 (feat. CSS-in-JS)**]
>
> [https://www.howdy-mj.me/css/emotionjs-intro](https://www.howdy-mj.me/css/emotionjs-intro)
