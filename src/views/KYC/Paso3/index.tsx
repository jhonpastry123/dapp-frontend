import React from 'react'
import { Text, Box, Radio } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'

const StyledText30 = styled(Text)`
  margin-bottom: 30px;
`
const Filter = styled.label`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  margin-right: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
`
const FilterContainer = styled.div`
  display: grid;
`
const FilterSubContainer = styled.div`
  display: grid;
  margin-bottom:20px;
`
const StyledRadio = styled(Radio)`
  margin-right:20px;
`
const Paso3 = () => {
    const { t } = useTranslation();
    const [radio, setRadio] = React.useState("one");
    const [radioSm, setRadioSm] = React.useState("one");

    const handleChange = (evt) => {

        console.info("fired");
        const { value } = evt.target;
        setRadio(value);
    };

    return (
        <>
            <StyledText30 color="#333" fontSize="35px" bold>
                Información Financiera
            </StyledText30>
            <Text color="#333" fontSize="25px">
                Incluye Información tus conocimientos en la materia, renta,origen
            </Text>
            <StyledText30 color="#333" fontSize="25px">
                de fondos y demas aspectos financleros.
            </StyledText30>
            <FilterSubContainer>
                <Text color="#333" fontSize="25px">
                    ¿Has Invertido en empresas no cotizadas gestionadas por ti a par otras
                </Text>
                <FilterContainer>
                    <Filter>
                        <StyledRadio name="md" value="one" onChange={handleChange} checked={radio === "one"} />
                        <Text ml="4px">{t('SI')}</Text>
                    </Filter>
                    <Filter>
                        <StyledRadio name="md" value="two" onChange={handleChange} checked={radio === "two"} />
                        <Text ml="4px">{t('NO')}</Text>
                    </Filter>
                </FilterContainer>
                <Text color="#ff0000" fontSize="25px">
                    Por favor ellge una opoion
                </Text>
            </FilterSubContainer>
            <FilterSubContainer>
                <Text color="#333" fontSize="25px">
                    ¿Conoces lo que es un Security Token y los riesgos que la inverslon en los mismos conlieva?
                </Text>
                <FilterContainer>
                    <Filter>
                        <StyledRadio name="md" value="one" onChange={handleChange} checked={radio === "one"} />
                        <Text ml="4px">{t('SI')}</Text>
                    </Filter>
                    <Filter>
                        <StyledRadio name="md" value="two" onChange={handleChange} checked={radio === "two"} />
                        <Text ml="4px">{t('NO')}</Text>
                    </Filter>
                </FilterContainer>
                <Text color="#ff0000" fontSize="25px">
                    Por favor ellge una opoion
                </Text>
            </FilterSubContainer>
            <FilterSubContainer>
                <Text color="#333" fontSize="25px">
                    ¿Sabes que Invirtiendo en empresas no cotizadas puedes perder hasta el 100% de tu Inversion?
                </Text>
                <FilterContainer>
                    <Filter>
                        <StyledRadio name="md" value="one" onChange={handleChange} checked={radio === "one"} />
                        <Text ml="4px">{t('SI')}</Text>
                    </Filter>
                    <Filter>
                        <StyledRadio name="md" value="two" onChange={handleChange} checked={radio === "two"} />
                        <Text ml="4px">{t('NO')}</Text>
                    </Filter>
                </FilterContainer>
                <Text color="#ff0000" fontSize="25px">
                    Por favor ellge una opoion
                </Text>
            </FilterSubContainer>
            <FilterSubContainer>
                <Text color="#333" fontSize="25px">
                    ¿Que porcentaje de tu patrimonio quieres Invertir en este tipo de productos?
                </Text>
                <FilterContainer>
                    <Filter>
                        <StyledRadio name="md" value="one" onChange={handleChange} checked={radio === "one"} />
                        <Text ml="4px">{t('Menos del 25%')}</Text>
                    </Filter>
                    <Filter>
                        <StyledRadio name="md" value="two" onChange={handleChange} checked={radio === "two"} />
                        <Text ml="4px">{t('Entre el 25 y 50%')}</Text>
                    </Filter>
                    <Filter>
                        <StyledRadio name="md" value="three" onChange={handleChange} checked={radio === "three"} />
                        <Text ml="4px">{t('Entre el 50 y 75%')}</Text>
                    </Filter>
                    <Filter>
                        <StyledRadio name="md" value="four" onChange={handleChange} checked={radio === "four"} />
                        <Text ml="4px">{t('Más del 75%')}</Text>
                    </Filter>
                </FilterContainer>
                <Text color="#ff0000" fontSize="25px">
                    Por favor ellge una opoion
                </Text>
            </FilterSubContainer>
            <FilterSubContainer>
                <Text color="#333" fontSize="25px">
                    ¿CuaI es el origen de la mayor parte de tus Ingresos periódicos?
                </Text>
                <FilterContainer>
                    <Filter>
                        <StyledRadio name="md" value="one" onChange={handleChange} checked={radio === "one"} />
                        <Text ml="4px">{t('No tengo Ingresons periódicos')}</Text>
                    </Filter>
                    <Filter>
                        <StyledRadio name="md" value="two" onChange={handleChange} checked={radio === "two"} />
                        <Text ml="4px">{t('Prestación por Jubilación o Incapacidad')}</Text>
                    </Filter>
                    <Filter>
                        <StyledRadio name="md" value="three" onChange={handleChange} checked={radio === "three"} />
                        <Text ml="4px">{t('Actividad laboral')}</Text>
                    </Filter>
                    <Filter>
                        <StyledRadio name="md" value="four" onChange={handleChange} checked={radio === "four"} />
                        <Text ml="4px">{t('Rentas de blenes Inmuebles en propiedad')}</Text>
                    </Filter>
                    <Filter>
                        <StyledRadio name="md" value="five" onChange={handleChange} checked={radio === "five"} />
                        <Text ml="4px">{t('Rendimientos de Inversiones financieras')}</Text>
                    </Filter>
                </FilterContainer>
                <Text color="#ff0000" fontSize="25px">
                    Por favor ellge una opoion
                </Text>
            </FilterSubContainer>
            <FilterSubContainer>
                <Text color="#333" fontSize="25px">
                    ¿CuaI es el origen del capital que quieres Invertir o reInvertir en este tlpo de productos?
                </Text>
                <FilterContainer>
                    <Filter>
                        <StyledRadio name="md" value="one" onChange={handleChange} checked={radio === "one"} />
                        <Text ml="4px">{t('Recolocar Inversiones flnancieras existentes')}</Text>
                    </Filter>
                    <Filter>
                        <StyledRadio name="md" value="two" onChange={handleChange} checked={radio === "two"} />
                        <Text ml="4px">{t('Herencia o donación')}</Text>
                    </Filter>
                    <Filter>
                        <StyledRadio name="md" value="three" onChange={handleChange} checked={radio === "three"} />
                        <Text ml="4px">{t('Ingresos por Negoclos')}</Text>
                    </Filter>
                    <Filter>
                        <StyledRadio name="md" value="four" onChange={handleChange} checked={radio === "four"} />
                        <Text ml="4px">{t('Otro origen')}</Text>
                    </Filter>
                </FilterContainer>
                <Text color="#ff0000" fontSize="25px">
                    Por favor ellge una opoion
                </Text>
            </FilterSubContainer>
        </>
    )
}

export default Paso3
