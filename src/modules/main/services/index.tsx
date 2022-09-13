/** @jsxImportSource @emotion/react */
import React from "react";
import { Box } from "@mui/material";
import example5 from "assets/zagar.png";
import exmaple4 from "assets/exmp4.png";
import example6 from "assets/exmp6.png";
import example7 from "assets/exmp7.png";
import example8 from "assets/exmp8.png";

import styles from "./styles";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "constants/appRoutes";

export const mainData = {
  usersComments: [
    {
      id: 1,
      name: "Name",
      surname: "Surname",
      job: "Job",
      comment: "Some text awdwadwdawd awdawdadad awdwadawd awdawdawd lorem",
      avatar: example5,
    },
    {
      id: 2,
      name: "Name",
      surname: "Surname",
      job: "Job",
      comment: "Some text awdwadwdawd awdawdadad awdwadawd awdawdawd lorem",
      avatar: example8,
    },
    {
      id: 3,
      name: "Name",
      surname: "Surname",
      job: "Job",
      comment: "Some text awdwadwdawd awdawdadad awdwadawd awdawdawd lorem",
      avatar: exmaple4,
    },
    {
      id: 4,
      name: "Name",
      surname: "Surname",
      job: "Job",
      comment: "Some text awdwadwdawd awdawdadad awdwadawd awdawdawd lorem",
      avatar: example6,
    },
    {
      id: 5,
      name: "Name",
      surname: "Surname",
      job: "Job",
      comment: "Some text awdwadwdawd awdawdadad awdwadawd awdawdawd lorem",
      avatar: example7,
    },
  ],
  usersQuestions: [
    {
      id: 1,
      question: "Можно ли ходить на массаж, в баню, в бассейн?",
      answer: [
        "В первые дни после процедуры мы рекомендуем вам отказаться от этой идеи. Дабы ваш загар продержался как можно дольше. Чуть позже - да, конечно.",
      ],
    },
    {
      id: 2,
      question: "Как смыть загар?",
      answer: [
        "1. Баня,ванная или горячий душ (кожу необходимо распарить)",
        "2. Любая пиллинг перчатка.",
        "3. Скрабы из любого состава, можно пожестче.",
        "4. Лимон+сода.",
        " 5.Жёсткая мочалка ",
        " 6.Профессиональный ремувер",
      ],
    },
    {
      id: 3,
      question: "Сколько длится процедура?",
      answer: [
        "15 минут все вместе; переодевания, процесс, окончание. Сам процесс нанесения загара длится 5 минут.",
      ],
    },
    {
      id: 4,
      question: "А это вредит коже? Сушит ее?",
      answer: [
        "Да, безусловно. Это лосьон, состоящий исключительно из натуральных компонентов, которые взаимодействуют только с верхнем слоем кожи «эпидермис»,не проникает в глубокие слои кожи , а также питает и увлажняет.",
        "Лосьон создается на основе тростникового сахара и вытяжки из малины.В составе лосьона содержится витаминный коктейль,который будет ухаживать за кожей.",
      ],
    },
    {
      id: 5,
      question: "Как подготовиться к загару?",
      answer: [
        "Перед процедурой вам необходимо:",
        "1. Принять душ со скрабом для тела / потереть себя хорошенько жесткой мочалкой, щеткой.",
        "*в составе скраба не должно содержаться ни каких масел, это важно!",
        "**скрабировать необходимо щадящими действиями не травмируя ее",
        "2. Не пользуемся косметикой",
        "3. Не пользуемся дезодорантами и парфюмом",
        "4. Не пользуемся кремом и лосьоном",
        "НА ПРОЦЕДУРУ ВЫ ПРИЕЗЖАЕТЕ С ЧИСТОЙ КОЖЕЙ!",
      ],
    },
    {
      id: 6,
      question: "Что надеть на сеанс загара?",
      answer: [
        "На загар рекомендуется приходить в свободной одежде темных тонов.",
        "После процедуры не рекомендуется одевать бюстгальтер т.к плотное соприкосновение с телом может привести к повреждению загара.",
        "Пример: спортивный костюм, джоггеры, платья, джинсы свободного кроя, футболки.",
      ],
    },
    {
      id: 7,
      question: "Как продлить загар",
      answer: [
        "Перед процедурой вам необходимо:",
        "1. Рекомендуется ежедневно увлажнять кожу молочком или кремом для тела.Это обеспечит продление эффекта и равномерное постепенное смывание загара.",
        "2. Использовать крема-пролонгаторы",
        "3. После банных процедур - промахивающими движениями собрать влагу с кожи (не тереть кожу полотенцем, тк загар может повредиться)",
        "4. Не используем скраб-мочалку,не посещайте сауны,бани и горячие ванны на момент носки загара",
      ],
    },
    {
      id: 8,
      question: "Пиллинг",
      answer: [
        "Пилинг — это база перед загаром.",
        "Он увлажняет кожу, продлевает жизнь загару, выравнивает ph кожи. Это как база под лосьон для загара.",
      ],
    },
    {
      id: 9,
      question: "Опудривание",
      answer: [
        "Опудривание — это фиксация загара.",
        "Пудра фиксирует загар после процедуры, убирает липкость, даёт мерцание кожи небольшими блесточками как «хайлайтер для лица» и приятный аромат бонусом!",
      ],
    },
    {
      id: 10,
      question: "Стикини",
      answer: [
        "Стикини — наклейки для защиты, применяемые при загаре.",
        "Основанием для любых стикини служит специальная силиконизированная бумага или же синтетическая плёнка.",
        "Они безопасны и безвредны для тела.",
        "Служат защитой для чувствительной зоны «сосков».",
      ],
    },
    {
      id: 11,
      question: "Капли усилитили",
      answer: [
        "Капли-усилитель для загара — это насыщение оттенка загара.",
        "Будет более ярко и потемнее.",
      ],
    },
  ],
  services: [
    {
      id: 1,
      title: "О нас",
      description: "Text text text text",
      link: APP_ROUTES.CONTACT,
    },
    { id: 2, title: "Цены", description: "Text text text text", link: "" },
    {
      id: 3,
      title: "Обучение",
      description: "Text text text text",
      link: APP_ROUTES.EDUCATION,
    },
    {
      id: 4,
      title: "Часто Задаваемые Вопросы",
      description: "Text text text text",
    },
  ],
};

export function Services() {
  const services = mainData.services;

  return (
    <Box css={styles.servicesContainerStyle}>
      <Box css={styles.servicesStyle}>
        {services.map((s: any) => {
          return (
            <Box key={s.id} css={styles.serviceItemStyle}>
              <Box css={styles.serviceTitleContainerStyle}>
                <Box css={styles.serviceIconContainer}>
                  <div css={styles.roundStyle} className="round" />
                  <img
                    css={styles.serviceIconStyle}
                    src="https://img.icons8.com/fluency-systems-regular/48/000000/full-moon.png"
                    alt=""
                  />
                </Box>
                <Box>
                  <h3 css={styles.serviceTitleTextStyle}>{s.title}</h3>
                </Box>
              </Box>
              <Link
                key={s.link}
                to={{
                  pathname: s.link,
                }}
                css={styles.linkStyle}
              >
                <Box
                  css={styles.serviceTextContainerStyle}
                  className="serviceText"
                >
                  <p>{s.description}</p>
                </Box>
              </Link>
            </Box>
          );
        })}
      </Box>
      <Box css={styles.servicesDescriptionContainerStyle}>
        <Box css={styles.servicesDescriptionTitleContainerStyle}>
          <h3>Title Text</h3>
        </Box>
        <Box css={styles.servicesDescriptionTextContainerStyle}>
          <p>
            text text text text text text text text text text text text text
            text text text
          </p>
        </Box>
      </Box>
    </Box>
  );
}
