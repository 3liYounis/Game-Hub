import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatform";
import { Select, Portal, createListCollection, HStack, Icon, Text } from "@chakra-ui/react"
import { iconMap } from "./PlatformIconList";
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
        <Select.Root collection={platforms} variant="subtle" size="lg" width="250px" fontFamily="monospace" color="ActiveBorder">
            <Select.HiddenSelect />
            <Select.Control>
                <Select.Trigger>
                    <Select.ValueText placeholder="Platform" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                    <Select.ClearTrigger onClick={() => onSelectPlatform(null)} />
                    <Select.Indicator />
                </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content maxHeight={170}>
                        {platforms.items.map((platform: {
                            id: number, value: string, label: string
                        }) => (
                            <Select.Item item={platform} key={platform.id} onClick={() => onSelectPlatform(mapToPlatform(platform))}>
                                <HStack>
                                    <Icon key={platform.id} as={iconMap[platform.value] ?? iconMap["not_supported"]} color="ActiveBorder" />
                                    <Text>{platform.label}</Text>
                                </HStack>
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