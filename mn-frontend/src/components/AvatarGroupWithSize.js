import React from 'react'

import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';

export default function AvatarGroupWithSize({ people, maxNum }) {

    // Calculate displayed avatars
    function clampAvatars(avatars, options = { max: 5 }) {
        const { max = 5, total } = options;
        let clampedMax = max < 2 ? 2 : max;
        const totalAvatars = total || avatars.length;
        if (totalAvatars === clampedMax) {
            clampedMax += 1;
        }
        clampedMax = Math.min(totalAvatars + 1, clampedMax);
        const maxAvatars = Math.min(avatars.length, clampedMax - 1);
        const surplus = Math.max(totalAvatars - clampedMax, totalAvatars - maxAvatars, 0);
        return { avatars: avatars.slice(0, maxAvatars).reverse(), surplus };
    }

    // Config max avatars to display
    const { avatars, surplus } = clampAvatars(people, {
        max: maxNum,
        total: people.length,
    });

    return (
        <AvatarGroup size="sm">
            {
                avatars.map((avatar, index) => (
                    <Avatar key={index}>
                        {
                            // Handle the display of names with one or two words
                            avatar.name.includes(' ') ? avatar.name.split(' ')[0][0] + avatar.name.split(' ')[1][0] : avatar.name.split(' ')[0][0]
                        }
                    </Avatar>
                ))
            }
            {!!surplus && <Avatar>+{surplus}</Avatar>}
        </AvatarGroup>
    )
}
