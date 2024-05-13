import classNames from 'classnames';
import React, { ElementType, FC, HTMLAttributes } from 'react';

export interface AvatarPresenceProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente AvatarPresence */
  className?: string;
  /** Utilizzare questo attributo per indicare il tipo di presenza dell'utente. */
  presence: 'active' | 'busy' | 'hidden' | string;
  testId?: string;
}

export const AvatarPresence: FC<AvatarPresenceProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  tag = 'div',
  presence,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const typeClass = classNames('avatar-presence', {
    presence
  });
  return <Tag {...attributes} className={typeClass} data-testid={testId} />;
};
