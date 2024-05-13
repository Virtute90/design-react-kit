import classNames from 'classnames';
import React, { FC, HTMLAttributes } from 'react';

export interface DimmerButtonsProps extends HTMLAttributes<HTMLElement> {
  /** Le varianti di colore definite in Bootstrap Italia per il componente Dimmer */
  color?: 'primary' | string;
  /** Classi aggiuntive da usare per il componente Dimmer */
  className?: string;
  /** Da utilizzare in presenza di un singolo bottone: quando abilitato ne centra il contenuto. */
  single?: boolean;
  /** Da utilizzare con `false` per abilitare il precedente comportamento senza sfondo scuro.
   * @deprecated
   */
  dark?: boolean;
  testId?: string;
}

export const DimmerButtons: FC<DimmerButtonsProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  color,
  className,
  single = false,
  dark = true,
  testId,
  ...attributes
}) => {
  const { children, ...rest } = attributes;
  const classes = classNames('dimmer-buttons', className, {
    'bg-dark': dark,
    'single-button': single
  });

  return (
    <div className={classes} {...rest} data-testid={testId}>
      {children}
    </div>
  );
};
