import React, { ElementType, FC, HTMLAttributes, MouseEventHandler, Ref } from 'react';
import { FadeProps, Alert as InnerAlert } from 'reactstrap';
import { CSSModule } from 'reactstrap/types/lib/utils';

// Copy over from reactstrap and add new ones
export interface AlertProps extends HTMLAttributes<HTMLElement> {
  closeClassName?: string;
  closeAriaLabel?: string;
  /** Oggetto contenente la nuova mappatura per le classi CSS. */
  cssModule?: CSSModule;
  /** Le varianti di colore definite in Bootstrap Italia */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string;
  /** Quando abilitato mostra un'animazione di entrata ed uscita del componente Alert. Valore di default: true. */
  fade?: boolean;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  transition?: FadeProps;
  /** Da utilizzare per impostare un riferimento all'elemento DOM */
  innerRef?: Ref<HTMLElement>;
  isOpen?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toggle?: MouseEventHandler<any>;
  testId?: string;
}

const defaultProps = {
  color: 'success',
  isOpen: true,
  fade: true
};

export const Alert: FC<AlertProps> = ({ testId, ...props }) => {
  return <InnerAlert data-testid={testId} {...props} />;
};

Alert.defaultProps = defaultProps;
