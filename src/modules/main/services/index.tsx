/** @jsxImportSource @emotion/react */
import React from "react";
import { Box } from "@mui/material";
import example5 from "assets/zagar.png";
import exmaple4 from "assets/exmp4.png";
import example6 from "assets/exmp6.png";
import example7 from "assets/exmp7.png";
import example8 from "assets/exmp8.png";

import styles from "./styles";

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
      question: "Как подготоваиться к загару?",
      answer:
        "Перед процедурой вам необходимо: - принять душ со скрабом для тела или просто потереть себя хорошенько жесткой мочалкой -в составе скраба не должно содержаться ни каких масел! - скрабировать тело молотыми зернами кофе НЕЛЬЗЯ! - не наносить косметики - не пользоваться дезодорантами и парфюмом - не пользоваться кремом и лосьоном - НА ПРОЦЕДУРУ ВЫ ПРИЕЗЖАЕТЕ С ЧИСТОЙ КОЖЕЙ!",
    },
    {
      id: 2,
      question: "Что надеть на сеанс загара?",
      answer:
        "Одевайте максимально свободную одежду не светлых тонов. Избегайте следующего типа одежд: джинсы-дудочки; лаковые,кожаные лосины-брюки, узкие юбки из плотных тканей. А также повредить загар может плотно прилегающее нательное белье, например, пуш-апы бюстгальтеры.",
    },
    {
      id: 3,
      question: "Имеют ли лосьоны неприятный запах?",
      answer:
        "Лосьон не имеет неприятного запаха,но на некоторых типах кожи он может отдавать специфическим запахом, который с первым же душем смывается и больше о себе не напоминает!",
    },
    {
      id: 4,
      question: "Как продлить загар?",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi error facere ad quo inventore accusantium magnam aliquam ab qui! Exercitationem fuga corporis placeat praesentium tempore, necessitatibus amet consequuntur ipsa.",
    },
    {
      id: 5,
      question: "А это вредит коже? Сушит ее?",
      answer:
        "Нет, это самый безопасный способ загара! Его делают даже беременные, делают молодые мамы и даже дети перед соревнованиями!",
    },
  ],
  services: [
    { id: 1, title: "О нас", description: "Text text text text" },
    { id: 2, title: "Цены", description: "Text text text text" },
    { id: 3, title: "Обучение", description: "Text text text text" },
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
              <Box
                css={styles.serviceTextContainerStyle}
                className="serviceText"
              >
                <p>{s.description}</p>
              </Box>
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
