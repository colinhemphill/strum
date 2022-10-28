/* eslint-disable @next/next/no-img-element */
import { tokens } from '@strum/react';
import { ColorScheme } from '@strum/react/dist/types/tokens';
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

const ogHeight = 600;
const ogWidth = 1200;
const neutral = tokens.neutral.mauve;
const accent = tokens.accent.blue;

const interBold = fetch(
  new URL('../../../public/fonts/Inter-Bold.ttf', import.meta.url),
).then((res) => res.arrayBuffer());

export const config = {
  runtime: 'experimental-edge',
};

const handler = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Strum Design System';
    const description =
      searchParams.get('description')?.slice(0, 60) ||
      'built with Vanilla Extract';
    const colorScheme = (searchParams.get('colorScheme') ||
      'dark') as ColorScheme;

    const logoSrc =
      colorScheme === 'light'
        ? 'https://strum.design/img/StrumLogo-LightMode.png'
        : 'https://strum.design/img/StrumLogo-DarkMode.png';
    const fontBold = await interBold;

    return new ImageResponse(
      (
        <div
          style={{
            alignItems: 'center',
            backgroundColor: neutral[colorScheme].neutral1,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-around',
            letterSpacing: '-0.1em',
            padding: `${ogHeight / 8}px ${ogWidth / 12}px`,
            width: '100%',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <img alt="Strum design logo" height={ogHeight / 10} src={logoSrc} />
          </div>
          <div
            style={{
              alignItems: 'center',
              backgroundColor: accent[colorScheme].accent1,
              borderColor: accent[colorScheme].accent6,
              borderRadius: tokens.radii.medium,
              borderStyle: 'solid',
              borderWidth: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              lineHeight: 1.3,
              padding: `${ogHeight / 16}px ${ogWidth / 24}px`,
              textAlign: 'center',
              width: 'auto',
            }}
          >
            <div
              style={{
                color: accent[colorScheme].accent12,
                fontFamily: 'Inter Bold',
                fontSize: ogHeight / 8,
                textTransform: 'uppercase',
              }}
            >
              {title}
            </div>
            <div
              style={{
                color: accent[colorScheme].accent11,
                fontFamily: 'Inter Bold',
                fontSize: ogHeight / 12,
              }}
            >
              {description.length === 60 ? `${description}...` : description}
            </div>
          </div>
        </div>
      ),
      {
        fonts: [
          {
            data: fontBold,
            name: 'Inter Bold',
            style: 'normal',
            weight: 700,
          },
        ],
        height: ogHeight,
        width: ogWidth,
      },
    );
  } catch (e: any) {
    return new Response('Failed to generate OG image', {
      status: 500,
    });
  }
};

export default handler;
