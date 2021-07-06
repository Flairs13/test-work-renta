import React from 'react';
import styled from 'styled-components/macro';
import {ReactComponent as Vk} from "../../assets/Icon_vk.svg";
import {ReactComponent as Fb} from "../../assets/Icon_fb.svg";
import {ReactComponent as Tw} from "../../assets/Icon_tw.svg";
import {ReactComponent as Ok} from "../../assets/icon_ok.svg";
import {ReactComponent as GooglePlay} from "../../assets/googlePlay.svg";
import {ReactComponent as AppStore} from "../../assets/appStore.svg";
import {Container} from "../../style-components/style-components";

const Social = () => {
    return (
        <SocialWrapper>
            <SocialNetworkWrapper>
                <SvgIconWrapperSocial>
                    <VkIcon/>
                </SvgIconWrapperSocial>
                <SvgIconWrapperSocial>
                    <FbIcon/>
                </SvgIconWrapperSocial>
                <SvgIconWrapperSocial>
                    <TwIcon/>
                </SvgIconWrapperSocial>
                <SvgIconWrapperSocial>
                    <OkIcon/>
                </SvgIconWrapperSocial>
            </SocialNetworkWrapper>
                <SocialAppWrapper>
                    <SvgIconWrapperGoogle>
                        <GoogleIcon/>
                    </SvgIconWrapperGoogle>
                    <SvgIconWrapperAppStore>
                        <AppStoreIcon/>
                    </SvgIconWrapperAppStore>
                </SocialAppWrapper>
        </SocialWrapper>
    );
};

export default Social;

const SocialWrapper = styled.div`
  display: flex;
  margin-top: 120px;
  padding-bottom: 55px;
  align-items: center;
  position: relative;
  @media(max-width: 740px){
      flex-direction: column;
  }
`

const SocialNetworkWrapper = styled.ul`
  display: flex;
  margin: 0 auto;
  li {
    margin: 0 20px;
      @media(max-width: 740px){
      margin: 0 10px;
  }
  }
`

const SocialAppWrapper = styled.ul`
  display: flex;
  position: absolute;
  right: 0;
  li {
    margin-right: 16px;
    :last-child {
      margin-right: 0;
    }
  }
    @media(max-width: 740px){
      position: static;
      margin-top: 25px;
  }
`
const SvgIconWrapperSocial = styled.li`
  width: 24px;
  height: 24px;
  cursor: pointer;
`
const SvgIconWrapperGoogle = styled.li`
  width: 106px;
  height: 32px;
  cursor: pointer;
`
const SvgIconWrapperAppStore = styled.li`
  width: 95px;
  height: 32px;
  cursor: pointer;
`
const VkIcon = styled(Vk)`
  width: 100%;
  height: 100%;
`
const FbIcon = styled(Fb)`
  width: 100%;
  height: 100%;
`
const TwIcon = styled(Tw)`
  width: 100%;
  height: 100%;
`
const OkIcon = styled(Ok)`
  width: 100%;
  height: 100%;
`
const GoogleIcon = styled(GooglePlay)`
  width: 100%;
  height: 100%;
`
const AppStoreIcon = styled(AppStore)`
  width: 100%;
  height: 100%;
`