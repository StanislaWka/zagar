/** @jsxImportSource @emotion/react */
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { CustomButton, CustomPhoneInput, Input } from "components";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "validators/zagarNaDom";
import { sendMessage } from "helpers/telegramApi";

import styles from "./styles";

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

enum VALUE {
  PILLING = "Жидкий пилинг",
  CAPLES = "Капли-усилители для загара",
  PUDRA = "Опудривание с эффектом мерцания",
  NOTHING = "Без дополнительных услуг",
}

const VALUES = [
  "Жидкий пилинг",
  "Капли-усилители для загара",
  "Опудривание с эффектом мерцания",
  "Без дополнительных услуг",
];

export function Cost() {
  const theme = useTheme();

  const scrollToForm = () => {
    const element = document.getElementById('form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [recipient, setRecipient] = React.useState<string[]>([
    VALUES[VALUES.length - 1],
  ]);

  const handleChange = (event: SelectChangeEvent<typeof recipient>) => {
    const {
      target: { value },
    } = event;
    const chosenRecipients =
      typeof value === "string" ? value.split(",") : value;
    if (
      [VALUE.PILLING, VALUE.CAPLES, VALUE.PUDRA].some((value) =>
        chosenRecipients.includes(value)
      )
    ) {
      const newArr = chosenRecipients.filter(
        (value) => value !== VALUE.NOTHING
      );
      setRecipient(newArr);
    } else {
      setRecipient(chosenRecipients);
    }
  };

  const formOptions = {
    defaultValues: {
      name: "",
      address: "",
      phoneNumber: "",
      extraRequirements: "",
    },
    resolver: yupResolver(validationSchema),
  };

  const { handleSubmit, register, control } = useForm(formOptions);

  const onSubmit = (formData: any) => {
    const data = {
      name: formData.name,
      address: formData.address,
      phoneNumber: formData.phoneNumber,
      extraRequirements: recipient.join(', '),
    };

    sendMessage(data);
  };

  return (
    <>
      <Typography variant="h3" sx={{ marginBottom: "40px" }}>
        ЦЕНЫ
      </Typography>
      <Box id="cost">
        <Box css={styles.BoxStyle}>
          <Box css={styles.mainBoxStyles}>
            <Box css={styles.flexCostStyle}>
              <Typography variant="h1">49</Typography>
              <Typography>BYN</Typography>
            </Box>
            <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
              МОМЕНТАЛЬНЫЙ ЗАГАР
            </Typography>
          </Box>
          <Typography css={styles.descriptionStyle}>
            <p>
              - Любой оттенок на все тело независимо от роста, веса и
              особенностей кожи
            </p>
            <p>- Стикини, полный набор одноразового белья</p>
            <p>- Консультация от профессионалов</p>
          </Typography>
          <CustomButton fullWidth color="primary" variant="contained" onClick={scrollToForm}>
            Записаться
          </CustomButton>
        </Box>
        <Box>
          <Box css={styles.mainBoxStyles}>
            <Box css={styles.flexCostStyle}>
              <Typography variant="h1"> 10</Typography>
              <Typography>BYN</Typography>
            </Box>
            <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
              ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ:
            </Typography>
          </Box>
          <Typography css={styles.descriptionStyle}>
            <p>— Жидкий пилинг</p>
            <p>— Опудривание на все тело с эффектом мерцания</p>
            <p>— Капли-усилитель для загара</p>
            <p>— Жидкий пилинг</p>
          </Typography>
          <CustomButton
            color="primary"
            variant="contained"
            fullWidth
            sx={{ marginBottom: "100px" }}
            onClick={scrollToForm}
          >
            Записаться
          </CustomButton>
        </Box>
        <Box id='form'>
          <Box css={styles.mainBoxStyles}>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Box>
                <Box css={styles.flexCostStyle}>
                  <Typography variant="h1"> 20</Typography>
                  <Typography>BYN</Typography>
                </Box>
                <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
                  ОПЛАТА ЗА ВЫЕЗД:
                </Typography>
              </Box>
              <Box>
                <Box css={styles.flexCostStyle}>
                  <Typography variant="h1"> 49</Typography>
                  <Typography>BYN</Typography>
                </Box>
                <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
                  ОПЛАТА ЗА ЗАГАР:
                </Typography>
              </Box>
            </Box>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              required
              label="Имя"
              name="name"
              placeholder="Введите имя"
              variant="outlined"
              register={register}
            />

            <Input
              required
              label="Адрес"
              name="address"
              placeholder="Введите адрес"
              variant="outlined"
              register={register}
            />
            <CustomPhoneInput
              height={40}
              placeholder="Number"
              name="phoneNumber"
              // @ts-ignore
              control={control}
              dataTestId="contact_phone-number"
            />
            <Box sx={{ width: "100%", padding: "1rem", marginBottom: "20px" }}>
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">
                  ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ"
                  name="recipient"
                  multiple
                  value={recipient}
                  onChange={handleChange}
                >
                  {VALUES.map((value, index) => (
                    <MenuItem
                      key={value}
                      value={value}
                      style={getStyles(value, recipient, theme)}
                    >
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <CustomButton
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              sx={{ marginBottom: "100px" }}
            >
              Отправить
            </CustomButton>
          </form>
        </Box>
      </Box>
    </>
  );
}
