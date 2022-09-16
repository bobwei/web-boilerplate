import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import copy from 'copy-to-clipboard';

import styles from './index.module.scss';
import EyeIcon from '../../../public/images/eye.svg';
import ShareIcon from '../../../public/images/share.svg';
import Time from '../Time';

const Comp = ({
  nViews,
  nShares,
  canonicalUrl,
  onDidShare,
  updatedAt,
  createdAt,
  onCancelShare = () => {},
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.container}>
        <div>
          <EyeIcon className={styles.icon} fill="#333" />
          <span className={styles.value}>{nViews}</span>
          <ShareIcon className={styles.icon} fill="#333" style={{ width: 22 }} />
          <span className={styles.value}>{nShares}</span>
        </div>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => {
            Promise.resolve()
              .then(() => {
                if ('share' in navigator) {
                  return navigator.share({
                    url: canonicalUrl,
                  });
                }
                copy(canonicalUrl);
                alert(t('Sharing url has been copied'));
              })
              .then(onDidShare)
              .catch(onCancelShare);
          }}
        >
          {t('Share')}
        </Button>
      </div>
      <div className="placeholder-20" />
      <div>
        <Time title={t('Updated At')} value={updatedAt} />
        <Time title={t('Created At')} value={createdAt} />
      </div>
    </>
  );
};

export default Comp;
