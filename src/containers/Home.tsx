/* tslint:disable: no-submodule-imports  */
import * as React from 'react';
import Helmet from 'react-helmet';
import Button from 'antd-mobile/lib/button';
import 'antd-mobile/lib/button/style/css';
import WhiteSpace from 'antd-mobile/lib/white-space';
import 'antd-mobile/lib/white-space/style/css';
import WingBlank from 'antd-mobile/lib/wing-blank';
import 'antd-mobile/lib/wing-blank/style/css';

const Home = () => (
  <div>
    <Helmet
      title="Home"
      meta={[
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Home' },
        { name: 'twitter:description', content: 'Twitter description of Home' },
        { name: 'twitter:image', content: 'http://path/to/image' },
        { property: 'og:title', content: 'Home' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'http://path/to/this/url' },
        { property: 'og:image', content: 'http://path/to/image' },
        { property: 'og:description', content: 'home descriptionをこちらに書きます' },
      ]}
    />
    <h2>Home</h2>
    <WingBlank>
      <Button>default</Button>
      <WhiteSpace />
      <Button disabled={true}>default disabled</Button>
      <WhiteSpace />

      <Button type="primary">primary</Button>
      <WhiteSpace />
      <Button type="primary" disabled={true}>
        primary disabled
      </Button>
      <WhiteSpace />

      <Button type="warning">warning</Button>
      <WhiteSpace />
      <Button type="warning" disabled={true}>
        warning disabled
      </Button>
      <WhiteSpace />

      <Button loading={true}>loading button</Button>
      <WhiteSpace />
      <Button icon="check-circle-o">with icon</Button>
      <WhiteSpace />
      <Button icon="check-circle-o" inline={true} size="small" style={{ marginRight: '4px' }}>
        with icon and inline
      </Button>
      <Button icon="check-circle-o" inline={true} size="small">
        with icon and inline
      </Button>
      <WhiteSpace />

      {/* <Button activeStyle={false}>无点击反馈</Button><WhiteSpace /> */}
      {/* <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace /> */}

      <WhiteSpace />
      <Button type="primary" inline={true} style={{ marginRight: '4px' }}>
        inline primary
      </Button>
      {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
      <Button type="ghost" inline={true} style={{ marginRight: '4px' }} className="am-button-borderfix">
        inline ghost
      </Button>

      <WhiteSpace />
      <Button type="primary" inline={true} size="small" style={{ marginRight: '4px' }}>
        primary
      </Button>
      <Button type="primary" inline={true} size="small" disabled={true}>
        primary disabled
      </Button>
      <WhiteSpace />
      <Button type="ghost" inline={true} size="small" style={{ marginRight: '4px' }}>
        ghost
      </Button>
      {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
      <Button type="ghost" inline={true} size="small" className="am-button-borderfix" disabled={true}>
        ghost disabled
      </Button>
    </WingBlank>
  </div>
);

export default Home;
