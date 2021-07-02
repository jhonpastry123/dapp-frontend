import React from 'react'
import { Text, Checkbox } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'

const StyledText30 = styled(Text)`
  margin-bottom: 30px;
`
const StyledCheckbox = styled(Checkbox)`
  padding-right: 20px;
`
const FilterContainer = styled.div`
  align-items: center;
  display: inline-flex;
  margin-right: 16px;
  margin-bottom:20px;
`
const Paso4 = () => {
    const { t } = useTranslation();

    return (
        <>
            <StyledText30 color="#333" fontSize="35px" bold>
                Solicitud de Clasificación como inversor profesional
            </StyledText30>
            <Text color="#333" fontSize="25px">
                [OPCIONAL] Completa solo si tu actividad principal es esta o Inviertes mas de 10.000€ al por operaclon. En caso contrario salta este paso
            </Text>
            <StyledText30 color="#333" fontSize="25px">
                financiera (AML). Solo te llevará unos minutos.
            </StyledText30>
            <FilterContainer>
                <StyledCheckbox />
                <Text color="#8c9398" fontSize="18px" style={{ marginLeft: 20 }}>
                    Solloito que con caracter general se me consldere &quot;Cllente Profesional&quot; a los efectos de la prestaclon de todos los serviclos de lnverslon y de los servicios auxillares sobre todos los instrumentos recogldos en el programa de actividades.
                </Text>
            </FilterContainer>
        </>
    )
}

export default Paso4
