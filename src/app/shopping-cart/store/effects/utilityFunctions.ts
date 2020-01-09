import { Product } from '../../models/product.interface';
import { Category, UtilityFilters, Filters } from '../../models/filters.interface';

export class UtilityFunctions {

  static utilityFilters(data: Product[], filter: string): Category[] {
    const extractFilters: string[] = data.map((product: Product) => {
      return product[filter];
    });
    const flatExtractedFilters = [].concat(...extractFilters);
    return flatExtractedFilters
      .reduce(
        (prev: string, next: string) =>
          prev.includes(next) ? prev : [...prev, next],
        []
      )
      .map((value: string) => {
        return { name: value, checked: false };
      });
  }

  static utilityConvertFilters(filters: Filters): UtilityFilters {
    const result: UtilityFilters = {
      manufacturer: [],
      size: [],
      for: [],
      material: [],
      season: []
    };
    for (let prop in filters) {
      filters[prop].forEach((value: Category) => {
        if (value.checked) {
          result[prop].push(value.name);
        }
      });
    }
    return result;
  }

  static utilityAddFilters(data: Product[], filters: UtilityFilters): Product[] {
    let newData: Product[] = [];
    !newData.length ? (newData = data) : null;
    for (let prop in filters) {
      if (filters[prop].length) {
        if (prop !== 'size') {
          const propertyFromFilter = filters[prop].join('');
          newData = newData.filter((product: Product) =>
            propertyFromFilter.includes(product[prop])
          );
        } else {
          newData = newData.filter((product: Product) => {
            const propertyFromProduct = product[prop].join('');
            return (
              filters[prop].filter((val: string) =>
                propertyFromProduct.includes(val)
              ).length === filters[prop].length
            );
          });
        }
      }
    }
    return newData;
  }

  static utilityChips(data: UtilityFilters): string[] {
    let result: string [] = [];

    for (let prop in data) {
      if (data[prop].length) {
        result = [...result, prop]
      }
    }

    return result;
  }
}