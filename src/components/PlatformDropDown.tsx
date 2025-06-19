import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatform";
import { Select, Portal, createListCollection } from "@chakra-ui/react"
interface Props {
    onSelectPlatform: (platform: Platform | null) => void;
}
const mapToMatchTemplate = (data: Platform[]) => {
    return createListCollection({
        items: data?.map((platform: Platform) => ({
            id: platform.id,
            label: platform.name,
            value: platform.slug
        })) || []
    });
}
const mapToPlatform = (platform: { id: number, label: string, value: string }): Platform => {
    return { id: platform.id, name: platform.label, slug: platform.value };
}
const PlatformDropDown = ({ onSelectPlatform }: Props) => {
    const { data, error } = usePlatforms();
    if (error) return null
    const platforms = mapToMatchTemplate(data);
    return (
        <Select.Root collection={platforms} size="lg" width="250px" fontFamily="monospace" color="ActiveBorder" marginY={5}>
            <Select.HiddenSelect />
            <Select.Control>
                <Select.Trigger>
                    <Select.ValueText placeholder="Platform" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                    <Select.Indicator />
                </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content>
                        {platforms.items.map((platform) => (
                            <Select.Item item={platform} key={platform.id} onClick={() => onSelectPlatform(mapToPlatform(platform))}>
                                {platform.label}
                                <Select.ItemIndicator />
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    );
}

export default PlatformDropDown