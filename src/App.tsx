import {
  Header,
  HeaderContent,
  InputContent,
  IconWrapper,
} from "./components/Header";
import {
  Card,
  CardText,
  CardHeader,
  CardIcon,
  CardTitle,
  Main,
  CardContent,
} from "./components/Body";
import { Body } from "./styles/styles";
import search from "./assets/search-vector.svg";
import heart from "./assets/heart-vector.svg";
import { useState } from "react";

const cardsData = [
  {
    title: "Agora é oficial: o Windows 11 está vindo",
    date: "02 de jul, 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
  },
  {
    title: "Tim Berners-Lee vai leiloar código-fonte da web",
    date: "02 de jul, 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
  },
  {
    title: "Tem Firefox novo no pedaço e você vai querer migrar",
    date: "02 de jul, 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.",
  },
  {
    title: "John McAfee, criador do antivírus McAfee, morre",
    date: "02 de jul, 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
  },
];

function App() {
  const [cards, setCards] = useState(cardsData);

  function searchNew(event: React.ChangeEvent<HTMLInputElement>) {
    const search = event.target.value.toLocaleLowerCase();

    if (search === "") {
      setCards(cardsData);
    }

    console.log(search);

    const filtredCards = cardsData.filter((card) => {
      if (card.title.toLocaleLowerCase().includes(search)) {
        return card;
      }
    });
    setCards(filtredCards);
  }

  return (
    <Body>
      <Header>
        <HeaderContent>
          <p>Codelandia</p>
          <p>blog</p>
        </HeaderContent>
        <InputContent>
          <IconWrapper>
            <img src={search} alt="search icon" />
          </IconWrapper>
          <input
            type="text"
            placeholder="Pesquisar no Blog"
            onChange={searchNew}
          />
        </InputContent>
      </Header>
      <Main>
        {cards.map((card, index: number) => {
          return (
            <Card key={index}>
              <CardContent>
                <CardHeader>
                  <p>{card.date}</p>
                  <CardIcon>
                    <img src={heart} alt="search icon" />
                  </CardIcon>
                </CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.content}</CardText>
              </CardContent>
            </Card>
          );
        })}
      </Main>
    </Body>
  );
}

export default App;
