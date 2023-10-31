import { styled } from 'styled-components';
import { Navigation, SettingComponent, TopNavigation } from 'components';
import { useNavigate } from 'react-router-dom';
import * as utils from 'utils';
import ModifSvg from 'assets/icons/pencil-modif.svg?react';

const profileInfo = {
  nickname: '줍줍',
  birthYear: 1998,
  height: 180,
  weight: 82,
};

const ProfileSettingPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(utils.URL.ONBORDING.WORKING);
  };
  return (
    <S.Wrap>
      <TopNavigation title="내 정보" rightComponent={<></>} />

      <S.SettingSection>
        <S.SubTitle>내 정보</S.SubTitle>
        <SettingComponent
          text={profileInfo.nickname}
          svg={<ModifSvg />}
          onClick={handleNavigate}
        />
        <SettingComponent
          text={profileInfo.birthYear.toString()}
          svg={<ModifSvg />}
          onClick={handleNavigate}
        />
      </S.SettingSection>

      <S.SettingSection>
        <S.SubTitle>신체 정보</S.SubTitle>
        <SettingComponent
          text={profileInfo.height.toString() + 'cm'}
          svg={<ModifSvg />}
          onClick={handleNavigate}
        />
        <SettingComponent
          text={profileInfo.weight.toString() + 'kg'}
          svg={<ModifSvg />}
          onClick={handleNavigate}
        />
      </S.SettingSection>
      <Navigation />
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.background};
  `,
  SettingSection: styled.div`
    margin-top: 10px;
    margin-left: 24px;
  `,

  SubTitle: styled.div`
    display: flex;
    width: 100%;
    height: 52px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    font-size: ${({ theme }) => theme.font.size.focus2};
    font-weight: ${({ theme }) => theme.font.weight.focus2};
  `,
};

export default ProfileSettingPage;
