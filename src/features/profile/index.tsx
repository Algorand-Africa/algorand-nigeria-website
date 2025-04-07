'use client';

import { PageMaxWidth } from '@/components/page-max-width';
import classNames from 'classnames';
import { useState } from 'react';
import { ProfilePhotoPrompt } from './profile-photo-prompt';
import { TabToggler } from '@/components/tab-toggler';
import { ProfileTab } from './profile-tab';
import { SettingsTab } from './settings-tab';

export const Profile = () => {
  const [selectedTab, setSelectedTab] = useState('Profile');

  return (
    <PageMaxWidth>
      <div className="py-6 lg:py-10 flex flex-col gap-6 lg:gap-10">
        <ProfilePhotoPrompt />
        <div className={classNames('flex flex-col gap-6')}>
          <div className="self-center lg:self-start">
            <TabToggler
              tabs={['Profile', 'Security']}
              selectedTab={selectedTab}
              onSelectTab={(tab) => setSelectedTab(tab)}
            />
          </div>

          {selectedTab === 'Profile' && <ProfileTab />}
          {selectedTab === 'Security' && <SettingsTab />}
        </div>
      </div>
    </PageMaxWidth>
  );
};
