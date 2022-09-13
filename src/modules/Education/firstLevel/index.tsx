/** @jsxImportSource @emotion/react */
import { Box, Grid, Typography } from "@mui/material";
import {
  BaseLevelArray,
  BaseLevelFeatures,
  BaseLevelPractice,
  SecondLevel,
  ThirdLevel,
} from "constants/education";
import React from "react";
import { GridItem } from "../gridItem";
import styles from "./styles";

interface Props {}

export function BaseLevel(props: Props) {
  return (
    <Box css={styles.greyStyle}>
      <Box sx={{ marginBottom: "50px" }}>
        <Box>
          <Typography variant="h2" sx={{marginBottom: '25px'}}>Базовая программа( уровень #1)</Typography>
          <Typography css={styles.afterCourseName} >
            Предназначена для начинающих мастеров по автозагару.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ marginBottom: "50px" }} css={styles.afterCourseName}>
            На индивидуальном занятии основной программы вы изучите основы
          </Typography>
          <Grid container spacing={8}>
            {BaseLevelArray.map((value) => (
              <Grid item xs={4}>
                <GridItem text={value} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box  sx={{ marginBottom: "50px" }}>
        <Typography css={styles.afterCourseName} sx={{ marginBottom: "50px" }}>Техника загара (практика):</Typography>
        <Grid container spacing={8}>
          {BaseLevelPractice.map((value) => (
            <Grid item xs={4}>
              <GridItem text={value} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box  sx={{ marginBottom: "50px" }}>
      <Typography css={styles.afterCourseName} sx={{ marginBottom: "50px" }}>Бонусы</Typography>
        <Grid container spacing={8}>
          {BaseLevelFeatures.map((value) => (
            <Grid item xs={4}>
              <GridItem text={value} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box  sx={{ marginBottom: "50px" }}>
        <Box  sx={{ marginBottom: "50px" }}>
          <Typography  sx={{ marginBottom: "50px" }} variant="h2">Уровень#2</Typography>
          <Typography css={styles.afterCourseName}>
            Идеально подходит для тех, кто уже обучен нанесению спрей-загара, но
            ищет дополнительные советы и знания о том, как расширить свою
            клиентскую базу с помощью маркетинговых советов и методов,работа с
            ошибками,мотивация,работа с возражениями,скрипты,как вести рабочий
            блог и т.д
          </Typography>
        </Box>
        <Box  sx={{ marginBottom: "50px" }}>
          <Typography css={styles.afterCourseName}>
            Курс проводит: основатель бизнес процессов Гулиева Анастасия,жюри
            чемпионатов по безопасному загару,эксперт с опытом работы 9
            лет,производитель собственной косметики для загара,владелица
            собственных онлайн магазинов с продукции для загара,представитель
            компании AURA(Германия), SIENNA-X(Великобритания),Прошедшая обучения
            в России,Великобритании,Австралии,США.
          </Typography>
        </Box>
        <Box  sx={{ marginBottom: "50px" }}>
          <Typography css={styles.afterCourseName}>Предварительное условие для этого курса:</Typography>
          <Typography css={styles.afterCourseName}>
            Вы завершили курс обучения по моментальному загару 1-го уровня.
          </Typography>
        </Box>
        <Box  sx={{ marginBottom: "50px" }}>
          <Grid container spacing={8}>
            {SecondLevel.map((value) => (
              <Grid item xs={4}>
                <GridItem text={value} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography css={styles.afterCourseName}>
          Обучение продлится 2 часа живая встреча в онлайн формате .
        </Typography>
      </Box>
      <Box  sx={{ marginBottom: "50px" }}>
        <Box>
          <Box  sx={{ marginBottom: "50px" }}>
            <Typography sx={{ marginBottom: "25px" }} variant="h2">
              Уровень #3 Повышение квалификации
            </Typography>
            <Typography css={styles.afterCourseName}>
              Изучение и рекомендации знаменитой студии загара,о которых не
              знают 90% мастеров.
            </Typography>
          </Box>
          <Box>
            <Typography  sx={{ marginBottom: "50px" }} css={styles.afterCourseName}>Содержание курса.</Typography>
            <Grid container spacing={8}>
              {ThirdLevel.map((value) => (
                <Grid item xs={4}>
                  <GridItem text={value} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
