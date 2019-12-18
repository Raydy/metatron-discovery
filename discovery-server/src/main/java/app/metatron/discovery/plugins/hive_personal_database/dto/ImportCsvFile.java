/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package app.metatron.discovery.plugins.hive_personal_database.dto;

public class ImportCsvFile extends ImportFile {
  private String lineSep = "\n";
  private String delimiter = ",";

  public String getLineSep() {
    return lineSep;
  }

  public void setLineSep(String lineSep) {
    this.lineSep = lineSep;
  }

  public String getDelimiter() {
    return delimiter;
  }

  public void setDelimiter(String delimiter) {
    this.delimiter = delimiter;
  }

  @Override
  public String toString() {
    return "ImportCsvFile{" +
        "lineSep='" + lineSep + '\'' +
        ", delimiter='" + delimiter + '\'' +
        '}';
  }
}